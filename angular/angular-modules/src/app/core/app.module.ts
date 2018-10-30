import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppDashboardComponent } from '../components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from '../modules/users/users.module';
import { LoggedInAuthGuard, AdminRoleAuthGuard } from '../modules/auth/auth.guards';
import { LoginComponent } from '../modules/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    UsersModule.forRoot(),      // Order is important! Must be BEFORE AppRoutingModule!
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AppDashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  providers: [
    LoggedInAuthGuard,
    AdminRoleAuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
