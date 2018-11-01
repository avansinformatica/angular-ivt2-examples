import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../user.service';
import { User } from '../user.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './user-dashboard.component.html',
  styles: []
})
export class UsersDashboardComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.userService.list(new HttpParams()).subscribe(
      users => this.users = users
    )
  }

}
