import { Component, OnInit } from '@angular/core';
import {WeatherDataService} from "../weatherData.service";

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {
  data:any=[];
  isDataLoaded:boolean=false;
  constructor(public weatherData:WeatherDataService) { }

  ngOnInit(): void {  }

  removeWeather(ind: number) {
    let data:any=localStorage.getItem("zipCodes");
    let newZipCodes='';
    data=data!.split(',');//data will be a string of zipcodes separated by comma(,). so we split the data and make it an array of zipcodes
    data.splice(ind,1);//now removing the zipcode from the data array

    //making a string of all the remaining zip codes and pushing them on the local storage
    for(let i=0;i<data.length;i++)
    {
      newZipCodes=newZipCodes===''?(data[i]):(newZipCodes+','+data[i]);
    }
    console.log(data);
    localStorage.setItem("zipCodes",newZipCodes);
    this.weatherData.weatherData.splice(ind,1);
  }
}
