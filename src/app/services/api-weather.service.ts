import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  private url = environment.url
  private apiKey = environment.apiKey

  constructor(
    private http: HttpClient
  ) { }

  getCurrentWeather(units: string, lat: string, lon: string): Observable<any> {
    return this.http.get<any>(`${this.url}/current?key=${this.apiKey}&lang=es&units=${units}&lat=${lat}&lon=${lon}`)
  }

}
