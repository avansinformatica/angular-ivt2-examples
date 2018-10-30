import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-not-found',
  templateUrl: './user.notfound.component.html'
})
export class UserNotFoundComponent {
  @Input() index: number;
  title: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'User not found';
  }

}
