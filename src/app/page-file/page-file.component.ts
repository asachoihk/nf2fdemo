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
      name: 'Identification documents',
      urls: [],
      uploading: false
    },
    {
      name: 'Provisional receipt',
      urls: [],
      uploading: false
    },
    {
      name: 'FATCA form',
      urls: [],
      uploading: false
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
        this.docs[data.docupload.index].urls = data.docupload.urls;


      }
    })
  }


  download(url) {
    window.open(url, '_blank')
  }

  isMobile() {
    return window.innerWidth < 1024 ? 'none' : 'block';
  }

  uploadFile(event, index) {
    //Get file
    var file = event.target.files[0];
    //Create a storage ref
    var fileRef = this.storage.ref('/tempfile/' + file.name);
    //Upload file
    const task = fileRef.put(file);

    this.uploadPercent[index] = task.percentageChanges();
   
    this.docs[index].uploading = true;


    task.then(ss => {
     // this.docs[index].urls.push(x.downloadURL);
      fileRef.getDownloadURL().subscribe(url => {
        this.docs[index].urls.push(url);
        this.docs[index].uploading = false;
        const data = {
          "docupload": {
            index,
            urls: this.docs[index].urls
          }
        };

        this.ss.getSocket().emit("dataToServer", data);
      })
      
    })


  }

}
