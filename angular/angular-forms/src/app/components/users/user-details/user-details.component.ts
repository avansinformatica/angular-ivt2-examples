import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  title = 'User Detail';
  user: User;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    // Subscribe to changes in route params. When the route changes we get updates on route params.
    this.route.params.subscribe((params) => {
      if(params['id']){
        // Subscribe for available users. Once users are available we get our specific user.
        this.userService.usersAvailable.subscribe(userAvailable => {
          if(userAvailable){
            this.user = this.userService.getUser(+params['id']);
          }
        })
      }
    });

  }

}
