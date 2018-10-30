import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  LoggedInAuthGuard as HasLoggedIn, 
  AdminRoleAuthGuard as HasAdminRole 
} from '../../modules/auth/auth.guards';

import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserNotFoundComponent } from './user-notfound/user.notfound.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

//
// Defines the routes for this module
//
const routes: Routes = [
  { path: 'users/me', component: UserProfileComponent, canActivate: [HasLoggedIn], data: { title: 'Me' } },
  {
    path: 'users', 
      component: UsersComponent, 
      canActivate: [ HasLoggedIn, HasAdminRole ],
      children: [
        { path: '', component: UserNotFoundComponent, data: { title: 'Select a User'} },
        { path: ':userId', component: UserDetailComponent, data: { title: 'User Details'} },
        { path: ':userId/edit', component: UserEditComponent, data: { title: 'Edit User' }  },
        { path: 'new', component: UserEditComponent, data: { title: 'New User' }  },
        { path: 'me', component: UserProfileComponent, canActivate: [ HasLoggedIn ], data: { title: 'Me' } },
        { path: '**', component: UserNotFoundComponent, data: { title: 'User Not Found' }  }
      ]
  }
];

@NgModule({
  imports: [
    // Always use forChild in child route modules!
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class UsersRoutingModule { }
