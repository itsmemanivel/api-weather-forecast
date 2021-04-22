import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Chart } from 'chart.js';  


interface Day {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  show:boolean = false;
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;
  data: any =[];  
  Player = [];  
  Run = [];  
  Linechart:any = [];  


  city:string='';

  location:string = '';
  forecastdays:any=[];
  days: Day[] = [
    {value: '1', viewValue: '1 Day'},
    {value: '2', viewValue: '2 Days'},
    {value: '3', viewValue: '3 Days'}
  ];
  constructor(private apiService: ApiService) { }


 


  ngOnInit(): void {

    this.city = 'karur';
    this.initGraph(this.city);

    
  }


  initGraph(city:string){

    this.show = true;
    this.apiService.getWeather(city,7).subscribe(res =>{
      console.log(res);
      this.show = false;

      this.location = res.location.name;
      this.forecastdays = res.forecast.forecastday;
      

      const data = {
        labels: [
          'Avg. Humidity',
          'Avg. Temperature',
          'Avg. Vis',
          'Chance of Rain',
          'Max. Temperature',
          'Max. Wind',
          'UV'
        ],
        datasets: [{
          label: this.forecastdays[0].date,
          data: [this.forecastdays[0].day.avghumidity, this.forecastdays[0].day.avgtemp_c, this.forecastdays[0].day.avgvis_km, this.forecastdays[0].day.daily_chance_of_rain, this.forecastdays[0].day.maxtemp_c, this.forecastdays[0].day.maxwind_kph, this.forecastdays[0].day.uv],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: this.forecastdays[1].date,
          data: [this.forecastdays[1].day.avghumidity, this.forecastdays[1].day.avgtemp_c, this.forecastdays[1].day.avgvis_km, this.forecastdays[1].day.daily_chance_of_rain, this.forecastdays[1].day.maxtemp_c, this.forecastdays[1].day.maxwind_kph, this.forecastdays[1].day.uv],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
          label: this.forecastdays[2].date,
          data: [this.forecastdays[2].day.avghumidity, this.forecastdays[2].day.avgtemp_c, this.forecastdays[2].day.avgvis_km, this.forecastdays[2].day.daily_chance_of_rain, this.forecastdays[2].day.maxtemp_c, this.forecastdays[2].day.maxwind_kph, this.forecastdays[2].day.uv],
          fill: true,
          backgroundColor: 'rgba(154, 162, 035, 0.2)',
          borderColor: 'rgb(154, 162, 235)',
          pointBackgroundColor: 'rgb(54, 62, 035)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(154, 62, 035)'
        }]
      };

      this.Linechart = new Chart('canvas', {  
        type: 'radar',  
        data: data,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      });  

      
    });  

  }


  changeCity(value:string){

   this.city = value;
   this.initGraph(this.city);
   

  }

 
  

}
