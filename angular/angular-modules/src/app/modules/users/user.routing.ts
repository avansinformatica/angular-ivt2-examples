import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  LoggedInAuthGuard as HasLoggedIn, 
  AdminRoleAuthGuard as HasAdminRole 
} from '../auth/auth.guards';

import { UsersComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserNotFoundComponent } from './user-notfound/user.notfound.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersDashboardComponent } from './user-dashboard/user-dashboard.component';

//
// Defines the routes for this module
// The order of the routes is important: routes are processed in order. Childroutes are 
// displayed in the first parent <router-outlet> found.
// See https://angular.io/guide/router.
//
const routes: Routes = [
  {
    path: 'users', 
      component: UsersComponent, 
      canActivate: [ HasLoggedIn, HasAdminRole ],
      children: [
        { path: 'dashboard', component: UsersDashboardComponent, data: { title: 'User Dashboard'}, children: [
          { path: ':userId/edit', component: UserNotFoundComponent, data: { title: 'Route does not exist' } },
          { path: ':userId', component: UserDetailComponent, data: { title: 'User Details'} }
        ] },
        { path: 'list', component: UserListComponent, data: { title: 'UserList' } },
        { path: 'list/:userId', redirectTo: ':userId' },
        { path: 'me', component: UserProfileComponent, canActivate: [HasLoggedIn], data: { title: 'Me' } },
        { path: 'new', component: UserEditComponent, data: { title: 'New User' }  },
        { path: ':userId/edit', component: UserEditComponent, data: { title: 'Edit User' }  },
        { path: ':userId', component: UserDetailComponent, data: { title: 'User Details'} },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
export class UserRoutingModule { }
