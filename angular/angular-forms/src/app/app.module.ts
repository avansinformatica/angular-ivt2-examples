import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderComponent } from "./components/header/header.component";
import { UsersModule } from "./components/users/users.module";

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { environment } from "../environments/environment";
import { InMemoryDataService } from "./in-memory-db.service";

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent],
  imports: [
    BrowserModule,
    // https://github.com/angular/in-memory-web-api#import-the-in-memory-web-api-module
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),

    // UsersModule must be before AppRoutingModule,
    // otherwise userroutes are overwritten by '**'.
    UsersModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
