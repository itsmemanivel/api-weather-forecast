import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="https://api.weatherapi.com/v1/forecast.json?key=428de9b18c794c9fb2f102612211904&q=Karur&days=35&aqi=no&alerts=no  "
  constructor(private http: HttpClient) { }



  getWeather (city:string, days:number):Observable<any>{
   
   return this.http.get<any>(`https://api.weatherapi.com/v1/forecast.json?key=428de9b18c794c9fb2f102612211904&q=${city}&days=${days}&aqi=no&alerts=no`);

  }
}
