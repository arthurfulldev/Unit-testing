import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { User } from './testClasses and mocks/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri: string = 'https://api.github.com';

  constructor( private http: HttpClient ) { }

  gatAll():Observable<User[]> {
      return this.http.get<User[]>(`${this.uri}/users`)
  }

  getUser(id): Observable<User>{
    return this.http.get<User>(`${this.uri}/users/${id}`);
  }
}
