import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import * as uuid from "uuid";
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class SessionctrlService {
  clientMode = false;
  constructor(private socket: Socket
  ) { }
  getUID() {
    return uuid.v4();
  }

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
