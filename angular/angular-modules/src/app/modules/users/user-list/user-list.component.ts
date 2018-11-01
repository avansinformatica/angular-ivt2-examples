import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from '../user.service';
import { User } from '../user.model';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  users: User[];
  title: string;

constructor(
  private userService: UsersService,
  private router: Router,
  private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Users List';
    this.userService.list(new HttpParams()).subscribe(
      // Receive array of json objects and convert them via map to User[]. 
      users => this.users = users.map(user => new User(user))
    )
  }

  onNewUser() {
    console.error('Not implemented yet!');
  }

  gotoUserDetails(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
