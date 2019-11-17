import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { User, UserRole } from '../users/user.model'
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment'
import { map, tap, catchError } from 'rxjs/operators'
import { AlertService } from 'src/app/modules/alert/alert.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedInUser = new BehaviorSubject<boolean>(false)
  public loggedInUserName = new BehaviorSubject<string>('')
  private isAdminUser = new BehaviorSubject<boolean>(false)
  private isPlainUser = new BehaviorSubject<boolean>(false)

  private readonly currentUser = 'currentuser'
  private readonly currentToken = 'token'

  // store the URL so we can redirect after logging in
  public readonly redirectUrl: string = '/dashboard'

  private readonly headers = new HttpHeaders({ 'Content-Type': 'application/json' })

  /**
   *
   * @param alertService
   * @param router
   * @param http
   */
  constructor(private alertService: AlertService, private router: Router, private http: HttpClient) {
    this.getCurrentUser().subscribe({
      next: (user: User) => {
        console.log(`${user.email} logged in`)
        this.isLoggedInUser.next(true)
        this.loggedInUserName.next(user.fullName)
        // Verify the possible roles the user can have.
        // Add more verifications when nessecary.
        user.hasRole(UserRole.Admin).subscribe(result => this.isAdminUser.next(result))
        user.hasRole(UserRole.Basic).subscribe(result => this.isPlainUser.next(result))
      },
      error: message => {
        this.isLoggedInUser.next(false)
        this.isAdminUser.next(false)
        this.isPlainUser.next(false)
        // this.router.navigate(['/login']);
      }
    })
  }

  /**
   * Log in
   *
   * @param username
   * @param password
   */
  login(email: string, password: string) {
    console.log('login')
    console.log(`${environment.apiUrl}/api/login`)

    return this.http
      .post(`${environment.apiUrl}/api/login`, { email, password }, { headers: this.headers })
      .pipe(
        tap(
          // Log the result or error
          data => console.log(data),
          error => console.error(error)
        )
      )
      .subscribe({
        next: (response: any) => {
          const currentUser = new User(response)
          console.dir(currentUser)
          this.saveCurrentUser(currentUser, response.token)
          // Notify all listeners that we're logged in.
          this.isLoggedInUser.next(true)
          this.loggedInUserName.next(currentUser.fullName)
          currentUser.hasRole(UserRole.Admin).subscribe(result => this.isAdminUser.next(result))
          currentUser.hasRole(UserRole.Basic).subscribe(result => this.isPlainUser.next(result))
          this.alertService.success('You have been logged in')
          // If redirectUrl exists, go there
          // this.router.navigate([this.redirectUrl]);
        },
        error: (message: any) => {
          console.log('error:', message)
          this.alertService.error('Invalid credentials')
        }
      })
  }

  /**
   * Log out.
   */
  logout() {
    console.log('logout')
    localStorage.removeItem(this.currentUser)
    localStorage.removeItem(this.currentToken)
    this.isLoggedInUser.next(false)
    this.isAdminUser.next(false)
    this.alertService.success('You have been logged out.')
  }

  /**
   * Get the currently logged in user.
   */
  private getCurrentUser(): Observable<User> {
    return new Observable(observer => {
      const localUser: any = JSON.parse(localStorage.getItem(this.currentUser))
      if (localUser) {
        console.log('localUser found')
        observer.next(new User(localUser))
        observer.complete()
      } else {
        console.log('NO localUser found')
        observer.error('NO localUser found')
        observer.complete()
      }
    })
  }

  /**
   *
   */
  private saveCurrentUser(user: User, token: string): void {
    localStorage.setItem(this.currentUser, JSON.stringify(user))
    localStorage.setItem(this.currentToken, token)
  }

  get userFullName(): Observable<string> {
    console.log('userFullName ' + this.loggedInUserName.value)
    return this.loggedInUserName.asObservable()
  }

  /**
   *
   */
  get userIsLoggedIn(): Observable<boolean> {
    console.log('userIsLoggedIn() ' + this.isLoggedInUser.value)
    return this.isLoggedInUser.asObservable()
  }

  /**
   *
   */
  get userIsAdmin(): Observable<boolean> {
    console.log('userIsAdmin() ' + this.isAdminUser.value)
    return this.isAdminUser.asObservable()
  }

  /**
   *
   */
  get userIsPlain(): Observable<boolean> {
    console.log('userIsPlain() ' + this.isPlainUser.value)
    return this.isPlainUser.asObservable()
  }
}
