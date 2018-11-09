"use strict";
/*
* A person abstract base class that implements the interface
*/
exports.__esModule = true;
// use 'export' to expose the class to the outside
// the abstract class 'implements' the interface
var Person = /** @class */ (function () {
    function Person() {
    }
    // default implementation of this method
    Person.prototype.getAge = function () {
        // returns an approximate age for now...
        var now = new Date(); // creates object with current time 
        return now.getFullYear() - this.birthDate.getFullYear();
    };
    // default implementation
    Person.prototype.getName = function () {
        // use 'this.' to reference members
        return this.lastName + ', ' + this.firstName;
    };
    return Person;
}());
exports.Person = Person;
