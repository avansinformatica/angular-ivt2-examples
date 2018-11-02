import { CanDeactivate } from "@angular/router";
import { NewUserComponent } from "./users/new-user/new-user.component";

// the deactivation guard needs to know for which component it is
// can be done more generically with interfaces
export class SaveGuard implements CanDeactivate<NewUserComponent> {

    // this method gets the component we're trying to deactivate, 
    // so you can use it to make the decision
    canDeactivate(component: NewUserComponent): boolean {
        // here we could check whether there are unsaved changes
        // in the component, look in the forms example
        return false;
    }
}