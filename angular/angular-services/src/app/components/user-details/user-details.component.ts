import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  title = 'User Detail';
  id = -1;
  user;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.id = +this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params) => {
      this.id = + params['id'];
      this.user = this.userService.getUser(this.id);
      if(this.user) console.log(`Got ${this.user.name.first}`)
    });

  }

}
