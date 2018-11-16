import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { User } from './user.model';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  constructor(
    private http: Http
  ) {
    console.log('UserService constructed');
   }

  public getUsers(): Observable<User[]> {
    return this.http.get(environment.apiUrl).pipe(
      // convert incoming responsestring to json
      map(response => response.json()),
      // get only the results property
      map(response => response.results),
      // optionally log the results
      // tap(console.log),
      // convert json array to User array
      map(users => users.map(data => new User(data))),
      // optionally log the results
      tap(console.log)

      // all of the above could have been done in one:
      // map(response => response.json().results.users.map(data => new User(data)))
    );
  }

  getUser(id: number): any {
    return this.users[id];
  }

}
