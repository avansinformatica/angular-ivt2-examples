import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { UserListComponent } from './user-list.component'
import { Component, Input } from '@angular/core'
import { AlertService } from 'src/app/modules/alert/alert.service'
import { Router } from '@angular/router'
import { UserService } from '../users.service'
import { of } from 'rxjs'

//
// Since the user-list.component.html template uses some component selectors,
// we need to stub these in the test.
//
// tslint:disable-next-line: component-selector
@Component({ selector: '[app-user-item]', template: '' })
class UserItemStubComponent {
  @Input() selectedUser
  @Input() index
}

// Global mock object
const dummyUser = {
  name: {
    title: 'mr',
    firstname: 'FirstnameTest',
    lastname: 'LastnameTest'
  },
  email: 'test@server.nl'
}

//
// Test suite for this component
//
describe('UserListComponent', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>

  // let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy }
  let alertServiceSpy: { success: jasmine.Spy; error: jasmine.Spy }
  let routerSpy: { navigateByUrl: jasmine.Spy }
  let userServiceSpy: { getUsers: jasmine.Spy }

  beforeEach(async(() => {
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['error', 'success'])
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
    userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers'])

    TestBed.configureTestingModule({
      // The declared components needed to test the UsersComponent.
      declarations: [
        UserListComponent, // The 'real' component that we will test
        UserItemStubComponent // Stubbed component required to instantiate the real component.
      ],
      //
      // The constructor of our real component uses dependency injected services that we must mock.
      // NEVER provide the real service in testcases!
      //
      providers: [
        { provide: AlertService, useValue: alertServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: UserService, useValue: userServiceSpy }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(UserListComponent)
    component = fixture.componentInstance
  }))

  afterEach(() => {
    fixture.destroy()
  })

  it('should create', async(() => {
    //
    // In UserListComponent.ngOnInit, the userService.getUsers() method is called.
    // We must mock that method and provide an expected result here.
    // Since getUsers() returns an Observable<User[]>, we must return a value of that type.
    //
    userServiceSpy.getUsers.and.returnValue(of([]))

    // getUsers() returns an Observable<User[]>, which is an asynchronous Observable
    // Therefore we have to wait until that subscription returns -> .whenStable().
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
      expect(component.users.length).toBe(0)
    })
  }))

  it('should display a correct list of users', async(() => {
    userServiceSpy.getUsers.and.returnValue(of([dummyUser, dummyUser]))
    // The component subscribes to an asynchronous Observable in ngOnInit, therefore
    // we have to wait until that subscription returns -> .whenStable().
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
      expect(component.users.length).toBe(2)
      expect(component.users[0].name.firstname).toBe('FirstnameTest')
      //
      // Optionally add more expects here
      //
    })
  }))

  it('should navigate to the correct user details when clicking on a user row', async(() => {
    // ToDo
  }))
})
