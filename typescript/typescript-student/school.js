"use strict";
exports.__esModule = true;
/*
 * A school contains many students and teachers
 */
var School = /** @class */ (function () {
    function School() {
        // create an array of objects that behave as a person
        this.people = [];
    }
    return School;
}());
exports.School = School;
// alternatively we can make school generic over the type of people
var GenericSchool = /** @class */ (function () {
    function GenericSchool() {
        this.people = [];
    }
    return GenericSchool;
}());
exports.GenericSchool = GenericSchool;
