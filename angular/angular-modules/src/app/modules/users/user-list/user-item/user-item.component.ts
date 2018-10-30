import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styles: []
})
export class UserItemComponent implements OnInit {

  @Input('user') user: User;
  @Input() index: Number;

  constructor() { }

  ngOnInit() {
  }

  printRole(role: number): string {
    let result: string;
    switch(role) {
      case 0: result = 'Basic'; break;
      case 1: result = 'Viewer'; break;
      case 2: result = 'Admin'; break;
      case 3: result = 'SuperUser'; break;
    }
    return result;
  }

}
