import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

/*
Define the routes in this constant.
The router will check and follow the first route
that matches from top to bottom.
*/
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  // the 'id' is a variable in the route, it can be accessed 
  // in the UserDetailComponent to display the correct user
  {
    path: 'users/:id', 
    component: UserDetailComponent,
    // this route is protected by the AuthGuard class
    canActivate: [AuthGuard]
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'notfound', component: NotfoundComponent},
  // empty route for home
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // wildcard to take you to a 404 not found page for other routes
  {path: '**', redirectTo: 'notfound', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    DashboardComponent,
    UserDetailComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    // include the router module here to set the routes
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
