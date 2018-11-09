import { Component, OnInit, Input } from '@angular/core';
import { mock_users } from 'src/app/user.mock';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  name: string;
  isSaved: boolean;

  constructor() { }

  ngOnInit() {
    this.isSaved = false;
    console.log(this.isSaved);
  }

  onSave() {
    mock_users.push(new User(this.name, []));
    this.isSaved = true;
    console.log(this.isSaved);
  }

}
