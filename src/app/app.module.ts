import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { WeathersComponent } from './weathers/weathers.component';
import { HomeComponent } from './home/home.component';
import { FivedayforecastComponent } from './fivedayforecast/fivedayforecast.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddlocationComponent,
    WeathersComponent,
    HomeComponent,
    FivedayforecastComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
