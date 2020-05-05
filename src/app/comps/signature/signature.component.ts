import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent {
  @ViewChild(SignaturePad, {static: true}) signaturePad: SignaturePad;


  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 400,
    'canvasHeight': 300
  };


  constructor(
    public dialogRef: MatDialogRef<SignatureComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }


  drawComplete() {
   
  }

  drawStart() {
 
  }

  done(): void {
 
    this.dialogRef.close({
      id: this.data.id,
      sign: this.signaturePad.toDataURL()
    });
  }

}
