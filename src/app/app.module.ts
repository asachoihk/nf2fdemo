import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FlexLayoutModule } from '@angular/flex-layout';


import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from "../environments/environment";
import { NgxPayPalModule } from "ngx-paypal";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
 


const config: SocketIoConfig = {
  url: "https://xgom8.sse.codesandbox.io/",
  options: {}
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    NgxPayPalModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [ ]
})
export class AppModule { }
