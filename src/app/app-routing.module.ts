import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { PageSignComponent } from './page-sign/page-sign.component';
import { PageFileComponent } from './page-file/page-file.component';
import { PagePaymentComponent } from './page-payment/page-payment.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SignatureComponent } from './comps/signature/signature.component';
import { SignaturePadModule } from "angular2-signaturepad";
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doc', component: PageFileComponent },

  { path: 'pay', component: PagePaymentComponent },
  { path: 'sign', component: PageSignComponent }
];
@NgModule({
  declarations: [
    PageSignComponent,
    PageFileComponent,
    PagePaymentComponent,
    HomeComponent
    ,
    SignatureComponent
  ],
  imports: [RouterModule.forRoot(routes),
    MatStepperModule,
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    SignaturePadModule,
    MatDividerModule,
    MatListModule ,
    MatButtonModule,],
  exports: [RouterModule],
  entryComponents: [SignatureComponent]
})
export class AppRoutingModule { }
