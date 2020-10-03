import { Component } from '@angular/core';
import { ApiWeatherService } from '../services/api-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public date
  public description: string
  public country: string = 'no country'
  public location: string = 'no city'
  public temp: string = '0'

  constructor(
    private api: ApiWeatherService
  ) {
    this.getCurrentWeather('M')
  }

  getCurrentWeather(units: string) {
    this.api.getCurrentWeather(units, '-33.390303', '-70.675391').toPromise()
      .then((weather: any) => {
        console.log(weather)
        this.location = weather.data[0].city_name
        this.country = weather.data[0].country_code
        this.temp = weather.data[0].temp
        this.date = new Date(weather.data[0].ob_time)
        this.description = weather.data[0].weather.description
      })
  }

}
