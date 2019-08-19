import { async, TestBed } from "@angular/core/testing";

import { MySampleComponent } from "./component.component";

describe("SkeletonComponentSpecs", () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MySampleComponent]
		}).compileComponents();
	}));
	describe("given component is initialized", () => {
		let element: HTMLHeadingElement;

		beforeEach(() => {
			const fixture = TestBed.createComponent(MySampleComponent);
			fixture.detectChanges();

			element = fixture.debugElement.nativeElement.querySelector(
				"h1"
			) as HTMLHeadingElement;
		});

		test("should have the text set", async(() => {
			expect(element.textContent).toMatch("Component sample");
		}));
	});
});
