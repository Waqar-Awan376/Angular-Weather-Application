import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {WeatherDataService} from "../weatherData.service";

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
  zipCodes: any = [];
  isWeatherLoaded: boolean = false;

  constructor(private http: HttpClient, private weatherData: WeatherDataService) {
  }

  ngOnInit(): void {
  }

  //This method will call the addLoc method from the the WeatherDataService.
  addLocation(formData: NgForm) {
    this.weatherData.addLoc(formData.value['loc_zipcode']);
  }
}
