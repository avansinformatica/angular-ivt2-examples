import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MySampleComponent } from "./component/component.component";

const appRoutes: Routes = [
	{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
	{
		path: "dashboard",
		component: MySampleComponent,
		pathMatch: "full"
	},
	{ path: "**", redirectTo: "/dashboard" }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
