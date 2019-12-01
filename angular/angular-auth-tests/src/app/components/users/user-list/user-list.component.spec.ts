import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing'
import { UserListComponent } from './user-list.component'
import { Component, Input, DebugElement, Directive, HostListener } from '@angular/core'
import { AlertService } from 'src/app/modules/alert/alert.service'
import { Router } from '@angular/router'
import { UserService } from '../users.service'
import { of } from 'rxjs'
import { By } from '@angular/platform-browser'
import { UserItemComponent } from './user-item/user-item.component'

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

// Global mock object
const dummyUser = {
  id: 1,
  name: {
    title: 'mr',
    firstname: 'FirstnameTest',
    lastname: 'LastnameTest'
  },
  email: 'test@server.nl',
  picture: { thumbnail: './assets/images/anonymous-person.png' }
}

//
// Test suite for this component
//
describe('UserListComponent', () => {
  let component: UserListComponent
  let fixture: ComponentFixture<UserListComponent>

  let linkDes
  let routerLinks

  let alertServiceSpy: { success: jasmine.Spy; error: jasmine.Spy }
  let routerSpy: { navigateByUrl: jasmine.Spy }
  let userServiceSpy: { getUsers: jasmine.Spy }

  beforeEach(async(() => {
    alertServiceSpy = jasmine.createSpyObj('AlertService', ['error', 'success'])
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
    userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers'])

    TestBed.configureTestingModule({
      // The declared components needed to test the UsersComponent.
      declarations: [
        UserListComponent, // The 'real' component that we will test
        UserItemComponent,
        RouterLinkStubDirective // Stubbed component required to instantiate the real component.
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

  it('should display a correct list of users', async () => {
    userServiceSpy.getUsers.and.returnValue(of([dummyUser, dummyUser]))

    // The component subscribes to an asynchronous Observable in ngOnInit, therefore
    // we have to wait until that subscription returns -> .whenStable().
    await fixture.whenStable()
    fixture.detectChanges()
    expect(component).toBeTruthy()
    expect(component.users.length).toBe(2)
    expect(component.users[0].name.firstname).toBe('FirstnameTest')
    expect(component.users[0].id.toString()).toEqual('1')
    //
    // Optionally add more expects here
    //
  })

  it('should navigate to the correct user details when clicking on a user row', async(() => {
    userServiceSpy.getUsers.and.returnValue(of([dummyUser]))

    fixture.whenStable().then(() => {
      fixture.detectChanges()

      expect(component).toBeTruthy()
      expect(component.users.length).toBe(1)

      // Find elements with an attached RouterLinkStubDirective
      linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective))
      // Get attached link directive instances using each DebugElement's injector
      routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective))

      // We should expect TWO routerlinks: 1 for the dummyUser, AND 1 for the New User button in the template.
      expect(routerLinks.length).toBe(2, 'should have 2 routerLinks')
      expect(routerLinks[0].linkParams).toBe('new')

      // The second one is the link in the user list table leading to the UserDetails route
      // Since we have only 1 user, and since we use the index to navigate to the userdetails,
      // and since we use child routing, the route leads us to the index of our only user, which is 0.
      expect(routerLinks[1].linkParams[0]).toBe(0)

      // Needs some more research:
      // let userLink = fixture.nativeElement.querySelector('a')
      // userLink.click()
      // fixture.detectChanges()
      // expect(routerLinks[0].navigatedTo).toBeTruthy() // or .toBe('[0]')
    })
  }))
})
