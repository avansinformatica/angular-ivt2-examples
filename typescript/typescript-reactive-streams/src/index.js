"use strict";
/**
 *
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
        return rxjs_1.from(this.roles).pipe(operators_1.map(val => val === rolename), operators_1.reduce((a, b) => a || b));
    }
}
exports.User = User;
const user = new User({
    _id: '1',
    firstname: 'Robin',
    lastname: 'Schellius',
    email: 'rs@server.com',
    roles: [UserRole.Admin, UserRole.Basic, UserRole.SuperUser]
});
//emit array as a sequence of values
// const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
// const subscribe = arraySource.subscribe(val => console.log(val));
function hasRole(rolename) {
    return rxjs_1.from([UserRole.Admin, UserRole.Basic, UserRole.SuperUser])
        .pipe(operators_1.map(val => val === rolename), operators_1.reduce((a, b) => a || b));
}
console.log('Has role UserRole.SuperUser:');
user.hasRole(UserRole.SuperUser)
    .subscribe(val => console.log('hasRole = ' + val));
console.log('Has role UserRole.Admin:');
user.hasRole(UserRole.Admin)
    .subscribe(val => console.log('hasRole = ' + val));
console.log('Has role UserRole.Viewer:');
user.hasRole(UserRole.Viewer)
    .subscribe(val => console.log('hasRole = ' + val));
