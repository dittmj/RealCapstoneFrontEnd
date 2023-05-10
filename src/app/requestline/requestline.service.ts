import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestlines.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = 'http://localhost:5000/api/requestlines';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<RequestLine[]>{
    return this.http.get(`${this.baseurl}`) as Observable<RequestLine[]>;
  }
  get(id: number): Observable<RequestLine>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLine>;
  }
  //should return 204 - CREATED
  create(requestLine: RequestLine): Observable<RequestLine>{
    return this.http.post(`${this.baseurl}`, requestLine) as Observable<RequestLine>;
  }
  //should return 201 - NO CONTENT
  change(id: number, requestLine: RequestLine): Observable<any>{
    return this.http.put(`${this.baseurl}/${id}`, requestLine) as Observable<any>;
  }
  //should return 201- NO CONTENT
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
  listReview(userId: number): Observable<RequestLine[]> {
    const url: string = `${this.baseurl}/review/${userId}`;
    return this.http.get(url) as Observable<RequestLine[]>;
  }
}
