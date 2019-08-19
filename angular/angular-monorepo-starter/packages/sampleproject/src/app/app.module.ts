// tslint:disable: max-line-length
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData, APP_BASE_HREF } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { storeFreeze } from "ngrx-store-freeze";
import { environment } from "../environments/environment";
import { MetaReducer } from "@ngrx/store";
import localeNl from "@angular/common/locales/nl";

import { AppComponent } from "./app/containers/app/app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppDashboardComponent } from "./app/containers/dashboard/dashboard.component";
import { MySampleComponent } from "./component/component.component";

import { SkeletonComponent } from "@speedy/package-1";

export const metaReducers: MetaReducer<any>[] = !environment.production
	? [storeFreeze]
	: [];

registerLocaleData(localeNl, "nl");

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		HttpClientXsrfModule.withOptions({
			cookieName: "My-Xsrf-Cookie",
			headerName: "My-Xsrf-Header"
		}),
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		AppDashboardComponent,
		MySampleComponent,
		SkeletonComponent
	],
	providers: [
		// { provide: RouterStateSerializer, useClass: CustomSerializer },
		{ provide: APP_BASE_HREF, useValue: "/" },
		{ provide: LOCALE_ID, useValue: "nl" }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
