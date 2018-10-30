import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from '../components/dashboard/dashboard.component';
import { LoggedInAuthGuard as UserHasLoggedIn } from '../modules/auth/auth.guards';
import { LoginComponent } from '../modules/auth/login/login.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: AppDashboardComponent, canActivate: [ UserHasLoggedIn ]},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
