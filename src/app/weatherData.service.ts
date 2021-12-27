import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class WeatherDataService{
  zipCodes:any=localStorage.getItem("zipCodes")?localStorage.getItem("zipCodes"):'';
  weatherData:any=[];
  constructor(private http:HttpClient) {
    this.loadWeatherData();
  }

  //loadWeatherData function will run on the startup. This method takes the zipcodes from the local storage. Split them into an array and get their weather information one by one.
  loadWeatherData=async():Promise<any>=>{
    if(this.zipCodes==='')
    {
      return;
    }
    let data=this.zipCodes.split(',');
    for(let i=0;i<data.length;i++)
    {
      this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${data[i]}&units=imperial&appid=`,{
        responseType:"json"
      }).subscribe((result)=>{
        this.weatherData.push({...result,zipcode:data[i]});//pushing the information from each zipcode to the weatherData array.
      });
    }
  }

  addLoc(locZipCode: any) {
    this.zipCodes=this.zipCodes===''?(''+locZipCode):(this.zipCodes+','+locZipCode);
    localStorage.setItem("zipCodes",this.zipCodes);//adding the zip code to the localstorage for later use
    this.addWeatherToList(locZipCode);
  }

  addWeatherToList(zipCode:any) {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=`,{
      responseType:"json"
    }).subscribe((result)=>{
      this.weatherData.push({...result,zipcode:zipCode});
    });
  }
}
