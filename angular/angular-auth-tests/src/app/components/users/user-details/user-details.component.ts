import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { User } from '../user.model'
import { UserService } from '../users.service'
import { filter, map, tap, switchMap } from 'rxjs/operators'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  title = 'User Detail'
  user: User
  id: number

  subs: Subscription

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    // Subscribe to changes in route params.
    // When the route changes we get updates on route params.
    this.subs = this.route.params
      .pipe(
        // we need the 'id' param
        filter(params => params.id),
        // we do not want empty params
        filter(params => !!params),
        // get the number 'id' from the params
        map(params => +params.id),
        // save id locally
        tap(id => (this.id = id)),
        // then wait for users to become available
        switchMap(id => this.userService.usersAvailable)
      )
      .subscribe(available => (this.user = this.userService.getUser(this.id)))
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe()
    }
  }
}
