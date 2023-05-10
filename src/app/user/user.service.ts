import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = 'http://localhost:5000/api/users';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]>{
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
  get(id: number): Observable<User>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  login(username: string, password: string): Observable<User>{
    return this.http.get(`${this.baseurl}/${username}/${password}`) as Observable<User>;
  }
  //should return 204 - CREATED
  create(user: User): Observable<User>{
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }
  //should return 201 - NO CONTENT
  change(id: number, user: User): Observable<any>{
    return this.http.put(`${this.baseurl}/${id}`,user) as Observable<any>;
  }
  //should return 201- NO CONTENT
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
