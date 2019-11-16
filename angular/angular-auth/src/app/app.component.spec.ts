import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { AlertModule } from './modules/alert/alert.module'
import { AlertService } from './modules/alert/alert.service'
import { Router } from '@angular/router'
import { AuthService } from './components/auth/auth.service'
import { HttpClient } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { LoginComponent } from './components/auth/login/login.component'
import { RegisterComponent } from './components/auth/register/register.component'
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core'

// @Component({ selector: 'app-dashboard', template: '' })
// class DashboardStubComponent {}

fdescribe('AppComponent', () => {
  let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy }
  let alertServiceSpy
  let authServiceSpy
  // https://angular.io/guide/testing#routing-component
  let routerSpy
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async(() => {
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['error', 'success', 'getMessage'])
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
    authServiceSpy = jasmine.createSpyObj('AuthService', ['constructor'])
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])

    TestBed.configureTestingModule({
      imports: [AppRoutingModule, AlertModule, RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      // Don't provide the real service! Provide a test-double instead
      providers: [
        { provide: AlertService, useValue: alertServiceSpy },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents()
  }))

  afterEach(() => {
    fixture.destroy()
  })

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'Auth Example'`, () => {
    fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('Auth Example')
  })
})
