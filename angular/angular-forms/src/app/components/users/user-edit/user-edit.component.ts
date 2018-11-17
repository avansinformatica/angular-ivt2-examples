import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  title: string;
  // editMode switches between editing existing user or creating a new user.
  // Default is false (= create new user)
  editMode: boolean;
  id: number;
  user: User;
  submitted = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data['title'] || 'Edit User';
    this.editMode = this.route.snapshot.data['userAlreadyExists'] || false;
    // Get the data statically - changes are not reflected.
    // this.id = +this.route.snapshot.paramMap.get('id');

    if(this.editMode){
      // Subscribe to changes in route params. When the route changes we get updates on route params.
      this.route.params.subscribe((params) => {
        if (params['id']) {
          // Subscribe for available users. Once users are available we get our specific user.
          this.userService.usersAvailable.subscribe(userAvailable => {
            if (userAvailable) {
              this.user = this.userService.getUser(+params['id']);
            }
          })
        }
      });
    } else {
      this.user = new User();
      // {
      //   name: {
      //     first: 'robin',
      //     last: 'schellius'
      //   },
      //   email: 'rschel@server.nl'
      // })
    }
  }

  saveUser(): void {
    console.log('Save user');
    // Save user via the service
    // Then navigate back to display view (= UserDetails).
    // The display view must then show the new or edited user.
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  onSubmit() { 
    this.submitted = true;
  }

}
