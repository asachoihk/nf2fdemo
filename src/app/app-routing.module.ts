import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageSignComponent } from './page-sign/page-sign.component';
import { PageFileComponent } from './page-file/page-file.component';
import { PagePaymentComponent } from './page-payment/page-payment.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
const routes: Routes = [
  { path: '', component: PageFileComponent },
  { path: 'doc', component: PageFileComponent },

  { path: 'pay', component: PagePaymentComponent },
  { path: 'sign', component: PageSignComponent }
];
@NgModule({
  declarations: [
    PageSignComponent,
    PageFileComponent,
    PagePaymentComponent
  ],
  imports: [RouterModule.forRoot(routes),
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
