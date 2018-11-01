import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  title: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'UsersComponent';
  }

}
