import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = 'http://localhost:5000/api/products'
 
  constructor(
    private http: HttpClient

  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Product[]>;
  }
  get(id: number): Observable<Product>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }
  //should return 204 - CREATED
  create(vendor: Product): Observable<Product>{
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Product>;
  }
  //should return 201 - NO CONTENT
  change(id: number, vendor: Product): Observable<any>{
    return this.http.put(`${this.baseurl}/${id}`, vendor) as Observable<any>;
  }
  //should return 201- NO CONTENT
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}

