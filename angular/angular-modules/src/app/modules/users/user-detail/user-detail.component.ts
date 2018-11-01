import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../user.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription, Observable } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: []
})
export class UserDetailComponent implements OnInit {

  title: string;
  id: number;
  user: User;
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  isActive: boolean;
  private readonly identifier = 'userId';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'User Details';
    this.isLoggedIn$ = this.authService.userIsLoggedIn;
    this.isAdmin$ = this.authService.userIsAdmin;
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params[this.identifier];
          this.userService.read(this.id).subscribe(
            user => {
              this.user = new User(user)
            })
        }
      );
  }

}
