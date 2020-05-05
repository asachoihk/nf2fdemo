import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import * as uuid from "uuid";

@Injectable({
  providedIn: 'root'
})
export class SessionctrlService {

  constructor(private socket: Socket
  ) { }

  connect() {
    const roomid = uuid.v4();
    this.socket.connect();
    this.joinRoom(roomid);
    return roomid;
  }
  joinRoom(roomid) {
    this.socket.emit("join", roomid);
  }
  send(data) {
    this.socket.emit("dataToServer", data);
  }
  getSocket() {
    return this.socket;
  }
}
