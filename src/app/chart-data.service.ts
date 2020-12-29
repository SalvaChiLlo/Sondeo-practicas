import { Remuneracion } from './remuneracion';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  constructor(private http: HttpClient) {}

  avgRemPerCompanyData(): Observable<Remuneracion[]> {
    return this.http.get<Remuneracion[]>('https://murmuring-woodland-76280.herokuapp.com/remuneracion');
  }
}
