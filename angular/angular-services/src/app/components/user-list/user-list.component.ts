import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'Users ListComponent'
  users: any[]

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }


}
