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
  public uploadImage(data): Observable<boolean> {
    console.log('uploadImage')
    console.dir(data)
    return this.http.post(`${environment.serverUrl}/images`, data, this.httpOptions)
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
      tap(console.log),
      map(images => images.results.map(data => new Image(data))),
      // log the results
      tap(console.dir),
      // all of the above can also be done in one operation:
      // map(response => response.results.map(data => new Image(data))),
      catchError(this.handleError), // then handle the error
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
