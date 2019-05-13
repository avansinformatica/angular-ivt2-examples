import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { InlineEditComponent } from "./components/custom/inline-edit/inline-edit.component";

@NgModule({
  declarations: [AppComponent, InlineEditComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
