import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionctrlService } from '../sessionctrl.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url;
  roomid = '';

  constructor(protected ss: SessionctrlService,
    private _snackBar: MatSnackBar, ) {
    this.url = ss.state['url'];
    this.roomid = ss.state['roomid'];
  }

  ngOnInit() {
  }

  getSocket() {
    return this.ss;
  }

  close() {
    this.ss.close(this.roomid);
    this.ss.state = {};
    this.url = '';
    this.roomid = '';
  }

  connect() {
    const roomid = this.ss.connect();
    this.roomid = roomid;
    this.ss.getSocket().on("online", data => {
      this._snackBar.open('someone online', 'ok', {
        duration: 1000,
        verticalPosition: 'bottom'
      })
    })

    const message = `Share following url to you customer:  ${window.location.href}#${roomid}&customer=1`;
    const action = "Open"
    this._snackBar.open(message, action, {
      duration: 10000,
      verticalPosition: 'bottom'
    }).onAction().subscribe(() => {
      window.open(`${window.location.href}#${roomid}&customer=1`, '_blank');
      this.url = `${window.location.href}#${roomid}&customer=1`;
      this.ss.state = {
        url: this.url,
        roomid: this.roomid
      }
    });
  }

  start() {
    const serverUrl = environment.socketConfig.url;

    //window.open(serverUrl, '_blank');
    window.open(serverUrl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=4000,height=4000");
  }



}
