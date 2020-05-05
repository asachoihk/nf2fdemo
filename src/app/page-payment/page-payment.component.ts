import { Component, OnInit } from '@angular/core';
import { SessionctrlService } from '../sessionctrl.service';

@Component({
  selector: 'app-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.css']
})
export class PagePaymentComponent implements OnInit {
  paymentDone = false;
  paid = false;
  tid = '';

  constructor(protected ss: SessionctrlService) { 
    this.ss.getSocket().on("dataFromServer", data => {
      console.log({
        data
      })
      if (data.paid) {
        this.paid = true;
        this.tid = data.paid;
      }
    })
  }

  getSocket() {
    return this.ss;
  }

  pay() {
    this.paid = true;
    this.tid = this.ss.getUID();
    this.ss.send({
      paid: this.tid
    })
  }

  ngOnInit() {
  }

}
