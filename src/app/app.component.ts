import { Component, OnInit } from '@angular/core';
import { SessionctrlService } from './sessionctrl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nf2fdemo';
  clientMode = false;
  menuOpened = true;

  toogleMenu(d) {
    this.menuOpened = d;
  }
  showerr() {
    console.log('room not exist');
    confirm('session closed');
    window.close();

  }
  ngOnInit() {
    this.clientMode = window.location.hash.includes('customer=1');
    if (this.clientMode) {
      if(prompt('enter password') != '1234') {
        this.showerr();
      }
      const roomid = document.location.hash.replace("#", "").replace("&customer=1", "");
      this.menuOpened = false;
      this.ss.clientMode = true;
      this.ss.getSocket().on("checkroomresult", (result) => {
        this.ss.getSocket().removeAllListeners();
        result ? this.ss.joinRoom(roomid) : this.showerr();
        this.ss.getSocket().on("dataFromServer", data => {
          if (data.control) {
            console.log(data.control)
            this.router.navigate([data.control]);
          }
        })
        
      })
      this.ss.getSocket().emit("checkroom", roomid);

    }
    this.ss.getSocket().on("dataFromServer", data => {
      if (data.control) {
        console.log(data.control)
        this.router.navigate([data.control]);
      }
    })
  }

  constructor(private ss: SessionctrlService, private route: ActivatedRoute, private router: Router) {



  }

}
