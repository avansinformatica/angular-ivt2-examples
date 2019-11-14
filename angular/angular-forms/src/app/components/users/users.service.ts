import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject, throwError, of } from 'rxjs'
import { map, tap, retry, catchError, flatMap } from 'rxjs/operators'
import { User } from './user.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]

  usersAvailable = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) {
    console.log('UserService constructed')
    console.log(`Connected to ${environment.apiUrl}`)
  }

  public getUsers(): Observable<User[]> {
    console.log('getUsers')
    return this.http.get<any>(`${environment.apiUrl}/api/users`).pipe(
      //   convert incoming responsestring to json
      // map(response => response.json()),
      //   get only the results property
      // map(response => response.results),
      //   optionally log the results
      // tap(console.log),
      //   convert json array to User array
      map(users => users.map(data => new User(data))),
      //   optionally log the results
      tap(console.log),

      catchError(this.handleError), // then handle the error
      // tap( // Log the result or error
      //   data => console.log(data),
      //   error => console.error('NU HIER: ' + error)
      // ),
      // all of the above can also be done in one operation:
      // map(response => response.results.map(data => new User(data))),
      tap(users => {
        this.users = users
        this.usersAvailable.next(true)
      })
    )
  }

  getUserFromServer(id: number): Observable<User> {
    console.log(`getUserFromServer(${id})`)
    return this.http.get<any>(`${environment.apiUrl}/api/users/${id}`).pipe(
      tap(console.log),
      catchError(this.handleError), // then handle the error
      tap(users => {
        this.users = users
        this.usersAvailable.next(true)
      })
    )
  }

  getUserViaObservable(id: number): Observable<User> {
    console.log(`getUserViaObservable(${id})`)
    return this.getUsers().pipe(
      map(users => users.filter(user => user.id === id)),
      flatMap(users => users),
      catchError(this.handleError)
    )
  }

  createUser(user: User) {
    console.log('createUser', user)
    return this.http
      .post<any>(`${environment.apiUrl}/api/users`, user)
      .pipe(catchError(this.handleError), tap(console.log))
  }

  updateUser(user: User) {
    console.log('updateUser')
    return this.http.put<any>(`${environment.apiUrl}/api/persons/${user.id}`, user)
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message || error)
  }
}

/**
 * This interface specifies the structure of the expected API server response.
 */
export interface ApiResponse {
  results: any[]
}
