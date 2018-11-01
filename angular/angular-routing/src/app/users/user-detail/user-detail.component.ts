import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { users_const } from 'src/app/user.constant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() id; // only used when component is not in router-outlet

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getUser(): User {
    // get the 'id' of the user from the route
    // '+' is here to turn it into a number
    // is done with an observable in another example
    const id: number = +this.route.snapshot.paramMap.get('id');
    return users_const[id];

    // used as a mock when component is not in router-outlet
    // return users_const[this.id];
  }

}
