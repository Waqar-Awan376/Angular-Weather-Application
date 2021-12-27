import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherDataService} from "../weatherData.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fivedayforecast',
  templateUrl: './fivedayforecast.component.html',
  styleUrls: ['./fivedayforecast.component.css']
})
export class FivedayforecastComponent implements OnInit {
  dayName: string[] =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  reqWeatherData:any=[];
  reqZipCode:string='';
  reqCityName:string='';
  constructor(private route:ActivatedRoute,private weatherData:WeatherDataService,private http:HttpClient) { }

  ngOnInit(): void {//this function is executed everytime this component is rendered
    let zc=this.route.snapshot.params['zipcode'];//taking the zipcode from the parameter
    this.reqZipCode=zc;

    //getting the data from the API using the zipcode
    this.http.get(`https://api.openweathermap.org/data/2.5/forecast/daily?zip=${zc}&cnt=5&units=imperial&appid=`,{
      responseType:"json"
    }).subscribe((result:any)=>{
      this.reqCityName=result['city'].name;//result object contains the JSON data. See Documentation of openweathermap API.
      for(let i=0;i<result['list'].length;i++)
      {
        let dt=new Date(1970, 0, 1);
        dt.setSeconds(result['list'][i].dt);
        this.reqWeatherData.push({dayName:this.dayName[dt.getDay()],minTemp:result['list'][i]['temp'].min,maxTemp:result['list'][i]['temp'].max,condition:result['list'][i]['weather'][0].main})//pushing the data to the array so that we can have 5 days forecast
      }
    });
  }

}
