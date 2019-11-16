import { AuthService } from './auth.service'
import { of, throwError } from 'rxjs'

/**
 *
 * See
 * - https://angular.io/guide/testing#service-tests
 * - https://angular.io/guide/http#testing-http-requests
 */
describe('AuthService', () => {
  let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy }
  let authService: AuthService
  let alertServiceSpy

  const expectedSuccessResponse = {
    gender: 2,
    name: { firstname: 'Firstname', lastname: 'Lastname' },
    email: 'user@host.com',
    picture: {
      large: './assets/images/anonymous-person.png',
      medium: './assets/images/anonymous-person.png',
      thumbnail: './assets/images/anonymous-person.png'
    },
    roles: [0],
    token:
      // tslint:disable-next-line: max-line-length
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzQ2MDE4NjMsImlhdCI6MTU3MzczNzg2Mywic3ViIjp7ImVtYWlsIjoiYWRtaW5AYXZhbnMubmwiLCJpZCI6IjVkYzlhY2Y3NmUzOTVhMTY1ODkwMjk2MiJ9fQ.lyYNLeNEMHgdEEYpXaIQfDVKntDfTnR8IehJkDKNGFs'
  }

  /**
   * The AuthService uses dependency injection to get other services:
   * the AlertService, Router and Http. We do not want to test these, so we use
   * service mocking. In beforeEach we set up the mocking services.
   */
  beforeEach(() => {
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['error', 'success'])
    // alertServiceSpy.error.and.returnValue(stubValue)

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])

    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])

    authService = new AuthService(alertServiceSpy, routerSpy, httpClientSpy as any)
  })

  it('should have been created', () => {
    expect(authService).toBeTruthy()
  })

  it('should verify at startup that no user is logged in when localstorage is empty', () => {
    // To Do
  })

  it('should verify at startup that a user is logged in when localstorage contains user information', () => {
    // To Do
  })

  it('should login a user on a call to login() with valid user information', () => {
    // Set input and expected output
    const email = 'test@dummyserver.com'
    const password = 'secret'
    const expectedAlertMessage = 'You have been logged in'

    httpClientSpy.post.and.returnValue(of(expectedSuccessResponse))

    const subs = authService.login(email, password)

    // We do not test the httpClientSpy; it has been tested by Angular and is outside our case.
    // expect(httpClientSpy.post.calls.count).toBe(1, 'httpClientSpy method must have been called once')
    // expect(httpClientSpy.post.calls.mostRecent().returnValue).toBe(expectedSuccessResponse)

    expect(alertServiceSpy.success.calls.count()).toBe(1, 'alertServiceSpy method must have been called once')
    expect(alertServiceSpy.success).toHaveBeenCalled()
    expect(alertServiceSpy.error.calls.count()).toBe(0, 'alertServiceSpy method must have been called once')
    expect(alertServiceSpy.error).not.toHaveBeenCalled()

    authService.userIsLoggedIn.subscribe(result => expect(result).toBe(true))
    authService.userFullName.subscribe(result => expect(result).toEqual('Firstname Lastname'))

    // Clean up subscription
    subs.unsubscribe()
  })

  it('should NOT login a user on a call to login() with INvalid user information', () => {
    // Set input and expected output
    const email = 'test@dummyserver.com'
    const password = 'secret'
    const expectedAlertMessage = 'Invalid credentials'
    const expectedErrorResponse = {
      error: { message: 'user not found' },
      name: 'HttpErrorResponse',
      ok: false,
      status: 401,
      statusText: 'Unauthorized'
    }

    // Make the http request fail; that is, return an Unauthorised message.
    httpClientSpy.post.and.returnValue(throwError(expectedErrorResponse))

    const subs = authService.login(email, password)

    // We do not test the httpClientSpy; it has been tested by Angular and is outside our case.

    expect(alertServiceSpy.error).toHaveBeenCalled()
    expect(alertServiceSpy.error.calls.count()).toBe(1, 'alertServiceSpy method must have been called once')
    expect(alertServiceSpy.success).not.toHaveBeenCalled()
    expect(alertServiceSpy.success.calls.count()).toBe(0, 'alertServiceSpy method must have been called once')

    authService.userIsLoggedIn.subscribe(result => expect(result).toBe(false))
    authService.userFullName.subscribe(result => expect(result).toEqual(''))

    // Clean up subscription
    subs.unsubscribe()
  })

  it('should return expected heroes (HttpClient called once)', () => {
    // const expectedHeroes: Hero[] = [
    //   { id: 1, name: 'A' },
    //   { id: 2, name: 'B' }
    // ]
    // httpClientSpy.get.and.returnValue(asyncData(expectedHeroes))
    // heroService
    //   .getHeroes()
    //   .subscribe(heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'), fail)
    // expect(httpClientSpy.get.calls.count()).toBe(1, 'one call')
  })

  it('should return an error when the server returns a 404', () => {
    // const errorResponse = new HttpErrorResponse({
    //   error: 'test 404 error',
    //   status: 404,
    //   statusText: 'Not Found'
    // })
    // httpClientSpy.get.and.returnValue(asyncError(errorResponse))
    // heroService.getHeroes().subscribe(
    //   heroes => fail('expected an error, not heroes'),
    //   error => expect(error.message).toContain('test 404 error')
    // )
  })
})
