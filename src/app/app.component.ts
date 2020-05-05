import { Component } from '@angular/core';
import { SessionctrlService } from './sessionctrl.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nf2fdemo';
  clientMode = false;
  menuOpened = true;

  toogleMenu(d) {
    this.menuOpened = d;
  }

  constructor(private ss: SessionctrlService, private route: ActivatedRoute, private router: Router) {
    this.clientMode =window.location.hash.includes('customer=1');
    if(this.clientMode) {
      const roomid = document.location.hash.replace("#", "").replace("&customer=1","");
      this.menuOpened = false;
      this.ss.joinRoom(roomid);
      this.ss.clientMode = true;      
    } 
    this.ss.getSocket().on("dataFromServer", data => {
      if(data.control) {
        console.log(data.control)
        this.router.navigate([data.control]);
      }
    })
 

  }

}
