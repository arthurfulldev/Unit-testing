import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from './testClasses and mocks/repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private uri: string = 'https://api.github.com/users';
  constructor( private http: HttpClient ) { }

  getAllRepos( user ): Observable<Repo[]>{
    return this.http.get<Repo[]>(`${this.uri}/${user}/repos`);
  }
}
