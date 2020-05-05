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
      path: '/'
    },
    {
      name: 'Agreement',
      path: '/'
    },
    {
      name: 'Disclosure',
      path: '/'
    },
    {
      name: 'Supporting Documents',
      path: '/doc'
    }, {
      name: 'Signature',
      path: '/sign'
    }, {
      name: 'Payment Details',
      path: '/pay'
    }, {
      name: 'Submission',
      path: '/'
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
