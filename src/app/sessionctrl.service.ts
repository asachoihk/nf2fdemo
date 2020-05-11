import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import * as uuid from "uuid";
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class SessionctrlService {
  clientMode = false;
  state = {};
  constructor(private socket: Socket
  ) { }
  getUID() {
    return uuid.v4();
  }

  connect() {
    const roomid = uuid.v4();
    this.socket.connect();
    this.createRoom(roomid);
    return roomid;
  }

  createRoom(roomid) {
    this.socket.emit("create", roomid);
  }

  joinRoom(roomid) {
    this.socket.on("checkroomresult", r=>{
      console.log({
        checkroomresult: r
        , roomid
      }     
      );
      if(r) {
        this.socket.emit("join", roomid);      
      }
    })
    this.socket.emit("checkroom", roomid);
    
  }
 

  close(roomid) {
    this.socket.emit("close", roomid);
  }
  send(data) {
    this.socket.emit("dataToServer", data);
  }
  getSocket() {
    return this.socket;
  }

}
