import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './components/images/image.list/image.list.component';
import { ImageUploadComponent } from './components/images/image.upload/image.upload.component';
import { AlertModule } from './components/alert/alert.module';
import { AlertService } from './components/alert/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ImageUploadComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    AlertModule,
    HttpClientModule    
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
