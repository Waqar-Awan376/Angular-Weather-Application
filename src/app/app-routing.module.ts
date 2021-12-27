import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {FivedayforecastComponent} from "./fivedayforecast/fivedayforecast.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'forecast/:zipcode',component:FivedayforecastComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
