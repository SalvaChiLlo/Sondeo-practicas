import { Precios } from './precios';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  offersUrl = 'https://murmuring-woodland-76280.herokuapp.com/';
  pricesUrl8 = 'https://murmuring-woodland-76280.herokuapp.com/prices8'
  pricesUrl5 = 'https://murmuring-woodland-76280.herokuapp.com/prices5'
  pricesUrl4 = 'https://murmuring-woodland-76280.herokuapp.com/prices4'
  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.offersUrl).pipe(
      tap(() => console.log('fetched offers')),
      catchError(this.handleError<Offer[]>('getOffers', []))
    );
  }

  getPrices8(): Observable<Precios[]> {
    console.log('SERVICE GET PRICE')
    return this.http.get<Precios[]>(this.pricesUrl8).pipe(
      tap(() => console.log('fetched offers')),
      catchError(this.handleError<Precios[]>('getPrices', [new PrecioObj()]))
    );
  }
  getPrices5(): Observable<Precios[]> {
    console.log('SERVICE GET PRICE')
    return this.http.get<Precios[]>(this.pricesUrl5).pipe(
      tap(() => console.log('fetched offers')),
      catchError(this.handleError<Precios[]>('getPrices', [new PrecioObj()]))
    );
  }
  getPrices4(): Observable<Precios[]> {
    console.log('SERVICE GET PRICE')
    return this.http.get<Precios[]>(this.pricesUrl4).pipe(
      tap(() => console.log('fetched offers')),
      catchError(this.handleError<Precios[]>('getPrices', [new PrecioObj()]))
    );
  }

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

class PrecioObj implements Precios{
  median: number = 0;
  avg: number = 0;
  max: number = 0;
  min: number = 0;
}