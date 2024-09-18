import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  constructor(private http: HttpClient) {}

  baseUrl = 'https://fakestoreapi.com/';

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.baseUrl}products`, {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      delay(5000)
    );
  }
}
