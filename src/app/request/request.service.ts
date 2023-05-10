import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = 'http://localhost:5000/api/requests';
  
  
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Request[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  //should return 204 - CREATED
  create(request: Request): Observable<Request>{
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  //should return 201 - NO CONTENT
  change(id: number, request: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/${id}`, request) as Observable<any>;
  }
  //should return 201- NO CONTENT
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
  listReview(userId: number): Observable<Request[]> {
    const url: string = `${this.baseurl}/reviews/${userId}`;
    return this.http.get(url) as Observable<Request[]>;
  }
  review(id: number, request: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/review/${id}`, request) as Observable<any>;
  }
  approve(id: number, request: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/approve/${id}`, request) as Observable<any>;
  }
  reject(id: number, request: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/reject/${id}`, request) as Observable<any>;
  }
}
