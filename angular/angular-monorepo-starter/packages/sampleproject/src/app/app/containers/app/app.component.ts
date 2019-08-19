import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Location } from "@angular/common";

@Component({
	selector: "app-root",
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ["app.component.scss"],
	templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
	title = "App title";

	constructor(private location: Location) {}

	ngOnInit() {
		this.location.getState();
	}
}
