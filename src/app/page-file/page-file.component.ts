import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionctrlService } from '../sessionctrl.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";

@Component({
  selector: 'app-page-file',
  templateUrl: './page-file.component.html',
  styleUrls: ['./page-file.component.css']
})
export class PageFileComponent implements OnInit {
  uploadPercent: Observable<Array<number[]>> = new Observable<Array<number[]>>();
  downloadURL: Observable<Array<string[]>> = new Observable<Array<string[]>>();
  docs = [
    {
      name: 'Identification docuement',
      url: ''
    },
    {
      name: 'Provisional receipt',
      url: ''
    },
    {
      name: 'FATCA form',
      url: ''
    }];


  constructor(
    private ss: SessionctrlService,
    private _snackBar: MatSnackBar,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {

    this.ss.getSocket().on("dataFromServer", data => {
      if (data.docupload) {
        console.log(data.docupload);
        this.docs[data.docupload.index].url = data.docupload.url;

      }
    })
  }

  connect() {
    const roomid = this.ss.connect();
    console.log({ roomid })

    const message = `Share following url to you customer:  ${window.location.href}#${roomid}&customer=1`;
    const action = "done"
    this._snackBar.open(message, action, {
      duration: 10000,
      verticalPosition: 'top'
    });
  }

  uploadFile(event, index) {
    const file = event.target.files[0];
    const filePath = "123456";
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent[index] = task.percentageChanges();
    this.downloadURL[index] = fileRef.getDownloadURL();


    fileRef.getDownloadURL().subscribe(url => {
      const data = {
        "docupload": {
          index,
          url
        }
      };
      console.log(
        { data }
      )
      this.ss.getSocket().emit("dataToServer", data);
    });




  }

}
