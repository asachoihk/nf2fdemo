import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SessionctrlService } from '../sessionctrl.service';

@Component({
  selector: 'app-page-file',
  templateUrl: './page-file.component.html',
  styleUrls: ['./page-file.component.css']
})
export class PageFileComponent implements OnInit {
 

  constructor(private ss: SessionctrlService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }
 
  connect() {
    const roomid = this.ss.connect();
    console.log({ roomid })

    const message = `Share this ${window.location.href}#${roomid}&customer=1 to you customer`;
    const action = "done"
    this._snackBar.open(message, action, {
      duration: 10000,
      verticalPosition: 'top'
    });
 
  }

}
