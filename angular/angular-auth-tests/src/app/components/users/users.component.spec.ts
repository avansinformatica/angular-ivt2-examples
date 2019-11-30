import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Component, Input, Directive, HostListener } from '@angular/core'
import { UsersComponent } from './users.component'

//
// Since the app.component.html template uses some component selectors,
// we need to stub these in the test.
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
// Test suite for this component
//
describe('UsersComponent', () => {
  let component: UsersComponent
  let fixture: ComponentFixture<UsersComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // The declared components needed to test the UsersComponent.
      declarations: [
        UsersComponent, // The 'real' component that we will test
        UserListStubComponent, // Stubbed component required to instantiate the real component.
        UserItemStubComponent, // Stubbed component required to instantiate the real component.
        RouterOutletStubComponent, // Stubbed component required to instantiate the real component.
        RouterLinkStubDirective // Stubbed component required to instantiate the real component.
      ],
      // Because the users.component.ts does not have any dependency injected services,
      // we do not need to provide any mocked services here.
      providers: []
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
