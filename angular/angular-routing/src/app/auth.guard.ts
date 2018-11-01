import { CanActivate } from "@angular/router";

/*
A route guard determines whether a user is authorized to
change the router state. Besides checking whether it's allowed
to use a route, it can also be checked whether it's allowed
to leave a route with 'CanDeactivate'
*/

export class AuthGuard implements CanActivate {
    private authenticated: boolean = true;
    
    canActivate(): boolean {
        // in another example real authentication is put here
        return this.authenticated;
    }
}