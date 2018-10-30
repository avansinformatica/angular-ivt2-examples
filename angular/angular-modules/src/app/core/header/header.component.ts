import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../modules/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  title = 'Demo';
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  fullNameSubscription: Subscription;
  fullName: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.userIsLoggedIn;
    this.isAdmin$ = this.authService.userIsAdmin;
    this.fullNameSubscription = this.authService.userFullName.subscribe(name => this.fullName = name);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.fullNameSubscription.unsubscribe();
  }
}
