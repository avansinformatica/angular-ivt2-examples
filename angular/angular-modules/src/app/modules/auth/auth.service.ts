import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User, UserRole } from '../users/user.model';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInUser = new BehaviorSubject<boolean>(false);
  private isAdminUser = new BehaviorSubject<boolean>(false);
  private isPlainUser = new BehaviorSubject<boolean>(false);
  // Username for printing in navbar
  private loggedInUserName = new BehaviorSubject<string>('');
  private readonly currentUser = 'currentuser';
  private readonly currentToken = 'token';

  // store the URL so we can redirect after logging in
  public readonly redirectUrl: string = '/dashboard';

  private readonly headers = new Headers({ 'Content-Type': 'application/json' });
  private apiLoginUserUrl = environment.apiLoginUserUrl;

  /**
   * 
   * @param alertService 
   * @param router 
   * @param http 
   */
  constructor(
    private router: Router,
    private http: Http
  ) {
    this.getCurrentUser().subscribe({
      next: (user: User) => {
        console.log(`${user.data.email} logged in`);
        this.isLoggedInUser.next(true);
        this.loggedInUserName.next(user.fullName);
        user.hasRole(UserRole.Admin).subscribe(result => this.isAdminUser.next(result));
        user.hasRole(UserRole.Basic).subscribe(result => this.isPlainUser.next(result));
      },
      error: message => {
        console.log(message);
        this.isLoggedInUser.next(false);
        this.isAdminUser.next(false);
        this.isPlainUser.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  /**
   * Log in
   * 
   * @param username 
   * @param password 
   */
  login(email: string, password: string) {
    console.log('login');

    return this.http.get(this.apiLoginUserUrl, { headers: this.headers })
      .pipe(
        map(response => response.json())

        //
        // Operations just since there's no backend api to talk to.
        // REMOVE when using backend api.
        //
        , map(response => response.result)
        , map(response => response[0])
        // , tap(response => console.log(response))
      ).subscribe({
        next: response => {
          const currentUser = new User(response);
          console.dir(currentUser);

          // TEMP: hard check for username/password
          if (currentUser.data.email == email && password === 'secret') {
            this.saveCurrentUser(currentUser, response.token);
            
            // Notify all listeners that we're logged in.
            this.isLoggedInUser.next(true);
            this.loggedInUserName.next(currentUser.fullName);
            currentUser.hasRole(UserRole.Admin).subscribe(result => this.isAdminUser.next(result));
            currentUser.hasRole(UserRole.Basic).subscribe(result => this.isPlainUser.next(result));

            //
            // If redirectUrl exists, go there
            // this.router.navigate([this.redirectUrl]);
            return true;
          } else {
            // Notify all listeners that we're NOT logged in.
            this.isLoggedInUser.next(false);
            return false;
          }

        },
        error: err => {
          console.error('something wrong occurred: ' + err);
        }
      });
  }

  /**
   * Log out.
   */
  logout() {
    console.log('logout');
    localStorage.removeItem(this.currentUser);
    localStorage.removeItem(this.currentToken);
    this.isLoggedInUser.next(false);
    this.router.navigate(['/login']);
  }

  /**
   * Get the currently logged in user.
   */
  private getCurrentUser(): Observable<User> {
    return Observable.create(observer => {
      const localUser: any = JSON.parse(localStorage.getItem(this.currentUser));
      if(localUser) {
        console.log('localUser found');
        observer.next(new User(localUser));
        observer.complete();
      } else {
        console.log('NO localUser found');
        observer.error('NO localUser found');
        observer.complete();
      };
    });
  }

  /**
   * 
   */
  private saveCurrentUser(user: User, token: string): void {
    localStorage.setItem(this.currentUser, JSON.stringify(user));
    localStorage.setItem(this.currentToken, token)
  }

  get userFullName(): Observable<string> {
    console.log('userFullName ' + this.loggedInUserName.value);
    return this.loggedInUserName.asObservable();
  }

  /**
   * 
   */
  get userIsLoggedIn(): Observable<boolean> {
    console.log('userIsLoggedIn() ' + this.isLoggedInUser.value);
    return this.isLoggedInUser.asObservable();
  }
  
  /**
   * 
   */
  get userIsAdmin(): Observable<boolean> {
    console.log('userIsAdmin() ' + this.isAdminUser.value);
    return this.isAdminUser.asObservable();
  }

  /**
   * 
   */
  get userIsPlain(): Observable<boolean> {
    console.log('userIsPlain() ' + this.isPlainUser.value);
    return this.isPlainUser.asObservable();
  }

}
