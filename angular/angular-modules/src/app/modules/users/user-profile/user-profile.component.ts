import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../users.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription, Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {

  title: string;
  id: number;
  user: User;
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isActive: boolean;
  private readonly identifier = 'userId';

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'User Details';
    this.isLoggedIn$ = this.authService.userIsLoggedIn;
    this.isAdmin$ = this.authService.userIsAdmin;

    const DummyValueOfAUser = 0;
    this.userService.read(DummyValueOfAUser).subscribe(
      user => this.user = new User(user)
    )
  }

}
