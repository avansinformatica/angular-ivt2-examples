"use strict";
/**
 * Map-reduce example.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Basic"] = 0] = "Basic";
    UserRole[UserRole["Viewer"] = 1] = "Viewer";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["SuperUser"] = 3] = "SuperUser";
})(UserRole || (UserRole = {}));
class User {
    constructor(values = {}) {
        Object.assign(this, values);
    }
    hasRole(rolename) {
        return rxjs_1.from(this.roles).pipe(
        // 1: log enum values: [0, 1, 2]
        // tap(val => console.log(val))
        // 2: map: enum => boolean
        operators_1.map(val => val === rolename), 
        // 3: log values: [false, true, false] 
        // tap(val => console.log(val))
        // 4: reduce: (boolean-a, boolean-b) => boolean-a || boolean-b
        operators_1.reduce((a, b) => a || b)
        // 5: reduced: [false, true, false] => [true]
        );
    }
}
exports.User = User;
const user = new User({
    name: 'Hendrik Haverkamp',
    email: 'hh@server.com',
    roles: [UserRole.Admin, UserRole.Basic, UserRole.SuperUser]
});
//emit array as a sequence of values
// const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
// const subscribe = arraySource.subscribe(val => console.log(val));
console.log('Has role UserRole.SuperUser:');
user.hasRole(UserRole.SuperUser)
    .subscribe(val => console.log('hasRole = ' + val));
console.log('Has role UserRole.Admin:');
user.hasRole(UserRole.Admin)
    .subscribe(val => console.log('hasRole = ' + val));
console.log('Has role UserRole.Viewer:');
user.hasRole(UserRole.Viewer)
    .subscribe(val => console.log('hasRole = ' + val));
