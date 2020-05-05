import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignatureComponent } from '../comps/signature/signature.component';
import { SessionctrlService } from '../sessionctrl.service';

@Component({
  selector: 'app-page-sign',
  templateUrl: './page-sign.component.html',
  styleUrls: ['./page-sign.component.css']
})
export class PageSignComponent implements OnInit {

  constructor(public dialog: MatDialog, protected ss: SessionctrlService, ) {

  }

  ngOnInit() {
    this.ss.getSocket().on("dataFromServer", data => {
      console.log({
        data
      })
      if (data.signature) {
        console.log(data.signature);
        this.loadImage(data.signature.id, data.signature.sign);
      }
    })
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(SignatureComponent, {
      width: '450px',
      height: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log({ result })
      this.loadImage(result.id, result.sign)
      this.ss.send({
        signature: result
      })



    });
  }
  loadImage(id, data) {
    var myCanvas :any = document.getElementById(id);
    var ctx = myCanvas.getContext('2d');
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    var img = new Image;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, myCanvas.width, myCanvas.height); // Or at whatever offset you like
    };
    img.src = data;

  }


}
