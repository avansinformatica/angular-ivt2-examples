import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map, tap, retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Image } from './image.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // , 'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param formData 
   */
  public uploadImage(image: Image): Observable<boolean> {
    console.log('uploadFile')
    console.dir(image)
    return this.http.post(`http://localhost:4200/api/images`, image, this.httpOptions)
      .pipe(
        map(() => { return true; }),
        catchError(this.handleError)
      )
  }

  /**
   * Get all images.
   */
  public getImages(): Observable<Image[]> {
    console.log('getImages');
    return this.http.get<ApiResponse>(`${environment.serverUrl}/images`)
    .pipe(
      //   convert incoming responsestring to json
      // map(response => response.json()),
      //   get only the results property
      // map(response => response.results),
      //   optionally log the results
      // tap(console.log),
      //   convert json array to Image array
      // map(users => users.map(data => new Image(data))),
      //   optionally log the results
      // tap(console.log)
      catchError(this.handleError), // then handle the error
      // tap( // Log the result or error
      //   data => console.log(data),
      //   error => console.error('NU HIER: ' + error)
      // ),
      // all of the above can also be done in one operation:
      map(response => response.results.map(data => new Image(data))),
      tap(users => {
        // this.users = users;
        // this.usersAvailable.next(true);
      })
      // error => console.log(error))
    );
  }

  /**
   * Handle errors
   * 
   * @param error 
   */
  private handleError(error: HttpErrorResponse) {
    console.log('handleError')
    // return an observable with a user-facing error message
    return throwError(
      // 'Something bad happened; please try again later.'
      error.message || error.error.message
    );
  };
}

/**
 * This interface specifies the structure of the expected API server response. 
 */
export interface ApiResponse {
  results: any[];
}
