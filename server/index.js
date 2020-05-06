const express = require("express");
const app = express();

const http = require("http");
const server = http.Server(app);

const socketIO = require("socket.io");
const io = socketIO(server);

const port = process.env.PORT || 80;

const activeCnn = () => {
  return Object.values(io.of("/").connected);
};

io.on("connection", socket => {
  socket.on("disconnect", () => { });
  socket.on("dataToServer", data => {
    console.log({
      dataToServer: data
    });
    socket.broadcast.in(socket["roomid"]).emit("dataFromServer", data);
  });
  socket.on("join", roomid => {
    console.log("Room Joined");
    console.log({
      userjoin: roomid
    });
    socket.join(roomid);
    socket["roomid"] = roomid;
    socket.broadcast.in(socket["roomid"]).emit("online", activeCnn().length);
  });
});

server.listen(port, () => { });

app.get("/", (req, resp) => {
  const cnn = Object.values(io.of("/").connected);
  console.log(cnn.map(c => c.rooms));
  const result = cnn.map(c => `<li> ${c.conn.remoteAddress} </li>`).join("");
  resp.send(`<ol>${result}</ol>`);
  console.log("Checking");
});

app.get("/close", (req, resp) => {
  activeCnn().forEach(c => {
    c.disconnect(true);
  });
  resp.send(`connection closed`);
});
