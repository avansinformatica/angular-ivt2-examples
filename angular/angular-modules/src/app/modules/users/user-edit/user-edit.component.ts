import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: []
})
export class UserEditComponent implements OnInit {

  title: string;

constructor(
  private route: ActivatedRoute
) { }

ngOnInit() {
  this.title = this.route.snapshot.data['title'];
}

}
