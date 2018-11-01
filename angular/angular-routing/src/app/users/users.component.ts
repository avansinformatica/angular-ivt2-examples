import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { users_const } from '../user.constant';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // mock data
  users: User[] = users_const;

  constructor() { }

  ngOnInit() {
  }

}
