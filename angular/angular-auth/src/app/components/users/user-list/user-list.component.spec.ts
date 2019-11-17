import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UserListComponent } from './user-list.component'
import { Component, Input } from '@angular/core'
import { AlertService } from 'src/app/modules/alert/alert.service'
import { Router } from '@angular/router'
import { UserService } from '../users.service'
import { of } from 'rxjs'

//
//
//
// tslint:disable-next-line: component-selector
@Component({ selector: '[app-user-item]', template: '' })
class UserItemStubComponent {
  @Input() selectedUser
  @Input() index
}

//
//
//
describe('UserListComponent', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>

  let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy }
  let routerSpy: { navigateByUrl: jasmine.Spy }
  let alertServiceSpy: { success: jasmine.Spy; error: jasmine.Spy }
  let userServiceSpy: { getUsers: jasmine.Spy }

  beforeEach(async(() => {
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['error', 'success'])
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
    userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers'])

    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserItemStubComponent],
      // Don't provide the real service! Provide a test-double instead!
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
    userServiceSpy.getUsers.and.returnValue(of([]))

    // The component subscribes to an asynchronous Observable in ngOnInit, therefore
    // we have to wait until that subscription returns -> .whenStable().
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
    })
  }))

  it('should display a correct list of users', async(() => {
    // ToDo
  }))

  it('should navigate to the correct user details when clicking on a user row', async(() => {
    // ToDo
  }))
})
