import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, Input, Directive, HostListener } from '@angular/core'
import { Router } from '@angular/router'
import { of } from 'rxjs'

import { UserListComponent } from './user-list/user-list.component'
import { UserService } from './users.service'
import { AlertService } from 'src/app/modules/alert/alert.service'
import { UsersComponent } from './users.component'

//
//
//
// tslint:disable-next-line: component-selector
@Component({ selector: '[app-user-item]', template: '' })
class UserItemStubComponent {
  @Input() selectedUser
  @Input() index
}

@Component({ selector: 'app-user-list', template: '' })
class UserListStubComponent {}

// tslint:disable-next-line: component-selector
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any
  navigatedTo: any = null

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams
  }
}

//
//
//
describe('UsersComponent', () => {
  let component: UsersComponent
  let fixture: ComponentFixture<UsersComponent>

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
      declarations: [
        UsersComponent,
        UserListStubComponent,
        UserItemStubComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective
      ],
      // Don't provide the real service! Provide a test-double instead!
      providers: [
        { provide: AlertService, useValue: alertServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: UserService, useValue: userServiceSpy }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(UsersComponent)
    component = fixture.componentInstance
  }))

  afterEach(() => {
    fixture.destroy()
  })

  it('should create', () => {
    // If the component subscribes to asynchronous observables on creation:
    // fixture.whenStable().then(() => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
    // })
  })
})
