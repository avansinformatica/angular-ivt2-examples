import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '../user.model'
import { UserService } from '../user.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  title = 'Users ListComponent'
  users: User[]

  subscription: Subscription

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.subscription.add(this.userService.getUsers().subscribe(users => (this.users = users)))
  }

  ngOnDestroy() {
    // Rommel opruimen zodra component ge-unload wordt.
    this.subscription.unsubscribe()
  }
}
