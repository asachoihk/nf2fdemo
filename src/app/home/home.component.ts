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

  constructor(protected ss: SessionctrlService,
    private _snackBar: MatSnackBar, ) { }

  ngOnInit() {
  }

  getSocket() {
    return this.ss;
  }

  connect() {
    const roomid = this.ss.connect();
    this.ss.getSocket().on("online", data =>{
      this._snackBar.open('someone online', 'ok', {
        duration: 1000,
        verticalPosition: 'bottom'
      }) 
    })
    console.log({ roomid })

    const message = `Share following url to you customer:  ${window.location.href}#${roomid}&customer=1`;
    const action = "Open"
    this._snackBar.open(message, action, {
      duration: 10000,
      verticalPosition: 'bottom'
    }).onAction().subscribe(() => {
      window.open(`${window.location.href}#${roomid}&customer=1`, '_blank');
      this.url = `${window.location.href}#${roomid}&customer=1`;
    });
  }

  start() {
    const serverUrl = environment.socketConfig.url;

    window.open(serverUrl, '_blank');
  }

}
