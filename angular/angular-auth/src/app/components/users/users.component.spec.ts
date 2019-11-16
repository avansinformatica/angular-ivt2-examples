import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UsersComponent } from './users.component'
import { UserListComponent } from './user-list/user-list.component'
import { UserItemComponent } from './user-list/user-item/user-item.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('UsersComponent', () => {
  let component: UsersComponent
  let fixture: ComponentFixture<UsersComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent, UserListComponent, UserItemComponent],
      imports: [RouterTestingModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
