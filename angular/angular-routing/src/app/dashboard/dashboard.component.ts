import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { mock_users } from '../user.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // mock data
  @Input() users: User[] = mock_users;
  
  constructor() { }

  ngOnInit() {
  }

  /*
  The usage of reduce in these two methods is the same as
  in the 'User' class. It keeps track of a total number and
  adds the number of posts or likes of each user in the array
  to that total.

  It's the same as this for loop:
  
  total: number = 0;
  for(let user of this.users) {
    total = total + user.getNumberOfPosts();
  }
  return total;
  */

  getTotalNumberOfPosts() {
    return this.users.reduce(
      (total: number, user: User) => total + user.getNumberOfPosts(),
      0
    );
  }

  getTotalNumberOfLikes() {
    return this.users.reduce(
      (total: number, user: User) => total + user.getNumberOfLikes(),
      0
    );
  }
}
