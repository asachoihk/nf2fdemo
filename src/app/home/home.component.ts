import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionctrlService } from '../sessionctrl.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ss: SessionctrlService,
    private _snackBar: MatSnackBar,) { }

  ngOnInit() {
  }

  connect() {
    const roomid = this.ss.connect();
    console.log({ roomid })

    const message = `Share following url to you customer:  ${window.location.href}#${roomid}&customer=1`;
    const action = "done"
    this._snackBar.open(message, action, {
      duration: 10000,
      verticalPosition: 'top'
    }).onAction().subscribe(()=>{
      window.open(`${window.location.href}#${roomid}&customer=1`, '_blank');
      window.open(`https://xgom8.sse.codesandbox.io/close`, '_blank');
    });
  }
  start() {
    window.open('https://xgom8.sse.codesandbox.io/','_blank');
  }

}
