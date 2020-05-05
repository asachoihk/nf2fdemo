import { Component, OnInit } from '@angular/core';
import { SessionctrlService } from '../sessionctrl.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navs = [
    {
      name: 'Basic information',
      path: '/',
      icon: 'check_circle'
    },
    {
      name: 'Agreement',
      path: '/',
      icon: 'check_circle'
    },
    {
      name: 'Disclosure',
      path: '/',
      icon: 'check_circle'
    },
    {
      name: 'Supporting Documents',
      path: '/doc',
      icon: 'panorama_fish_eye'
    }, {
      name: 'Signature',
      path: '/sign',
      icon: 'panorama_fish_eye'
    }, {
      name: 'Payment Details',
      path: '/pay',
      icon: 'panorama_fish_eye'
    }, {
      name: 'Submission',
      path: '/',
      icon: 'panorama_fish_eye'
    },    
  ]


  
  constructor(private ss: SessionctrlService, ) { }

  ngOnInit() {
  }
  nav(section) {
    console.log(section)
    this.ss.send({
      control: section
    })
  }
}
