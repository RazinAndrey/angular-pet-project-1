import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../models/products';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  constructor(
    private http: HttpClient, 
    private errorService: ErrorService,
  ) {}

  baseUrl = 'https://fakestoreapi.com/';

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.baseUrl}products`, {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      delay(200),
      retry(2),
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse){
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
