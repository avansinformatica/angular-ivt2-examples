import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AppModule } from "../../../app.module";

describe("AppComponent", () => {
	beforeAll(async(() => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
	}));

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [],
			imports: [AppModule]
		}).compileComponents();
	}));

	it("should create the app", async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it(`should have as title 'App title'`, async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual("App title");
	}));

	// it('should render Login in a h1 tag', async(() => {
	//   const fixture = TestBed.createComponent(AppComponent);
	//   fixture.detectChanges();
	//   const compiled = fixture.debugElement.nativeElement;
	//   console.log(compiled.querySelector('h1'));
	//   expect(compiled.querySelector('h1').textContent).toContain('Log in');
	// }));
});
