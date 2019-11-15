import { AuthService } from './auth.service'
import { of } from 'rxjs'

/**
 *
 * See
 * - https://angular.io/guide/testing#service-tests
 * - https://angular.io/guide/http#testing-http-requests
 */
fdescribe('AuthService', () => {
  /**
   * The AuthService uses dependency injection to get other services:
   * the AlertService, Router and Http. We do not want to test these, so we use
   * service mocking. In setup() we set up the mocking services.
   *
   */
  function setup() {
    const alertServiceSpy = jasmine.createSpyObj('AlertService', ['error', 'success'])
    // alertServiceSpy.error.and.returnValue(stubValue)

    let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy }
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])

    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])

    const authService = new AuthService(alertServiceSpy, routerSpy, httpClientSpy as any)

    return { authService, alertServiceSpy, routerSpy, httpClientSpy }
  }

  xit('should verify that no user is logged in when localstorage is empty', () => {
    // To Do
  })

  xit('should verify that a user is logged in when localstorage contains a valid token', () => {
    // To Do
  })

  it('should return stubbed value from a spy on call to login()', () => {
    const { authService, alertServiceSpy, routerSpy, httpClientSpy } = setup()
    const email = 'test@dummyserver.com'
    const password = 'secret'
    const expectedResponse = {
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
    const expectedAlertMessage = 'You have been logged in'

    httpClientSpy.post.and.returnValue(of(expectedResponse))

    const subs = authService.login(email, password)
    expect(subs).toBe(expectedResponse, 'service returned expected response')
    //
    expect(alertServiceSpy.success.calls.count()).toBe(1, 'spy method was called once')
    expect(alertServiceSpy.success.calls.mostRecent().returnValue).toBe(expectedAlertMessage)
    subs.unsubscribe()
  })

  xit('should return expected heroes (HttpClient called once)', () => {
    const { authService, alertServiceSpy, routerSpy, httpClientSpy } = setup()
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
    const { authService, alertServiceSpy, routerSpy, httpClientSpy } = setup()
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
