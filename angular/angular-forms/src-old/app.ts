
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { navbar } from './navbar';
import { footer } from './footer';
import { dash } from './dash';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html',
  styleUrls: ['src/app.css']
})
export class App {
}   

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()], 
  declarations: [App, navbar, footer, dash]
  bootstrap: [App]
}) 
export class AppModule {}
