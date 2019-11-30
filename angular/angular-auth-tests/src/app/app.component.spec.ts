import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { Component, Directive, Input, HostListener } from '@angular/core'

//
// Since the app.component.html template uses some component selectors,
// we need to stub these in the test.
//
@Component({ selector: 'app-dashboard', template: '' })
class DashboardStubComponent {}

@Component({ selector: 'app-header', template: '' })
class HeaderStubComponent {
  @Input() apptitle: string
}

@Component({ selector: 'app-alert', template: '' })
class AlertStubComponent {}

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
// The test suite for AppComponent.
//
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let app

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, // The 'real' component that we will test
        AlertStubComponent, // Required stubbed components
        DashboardStubComponent,
        HeaderStubComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    app = fixture.debugElement.componentInstance
  }))

  afterEach(() => {
    fixture.destroy()
  })

  it('should create the app', () => {
    fixture.detectChanges()
    expect(app).toBeTruthy()
  })

  it(`should have as title 'Auth Example'`, () => {
    fixture.detectChanges()
    expect(app.title).toEqual('Auth Example')
  })
})
