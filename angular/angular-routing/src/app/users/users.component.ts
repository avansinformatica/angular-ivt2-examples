import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { mock_users } from '../user.mock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // mock data
  users: User[] = mock_users;

  constructor() { }

  ngOnInit() {
  }

}
