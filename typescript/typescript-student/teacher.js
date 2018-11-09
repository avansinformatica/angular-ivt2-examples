"use strict";
/*
 * A teacher class that extends the base class
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// import the person base class
var person_1 = require("./person");
// an enum defining different teacher levels
var TeacherLevel;
(function (TeacherLevel) {
    TeacherLevel[TeacherLevel["Beginner"] = 0] = "Beginner";
    TeacherLevel[TeacherLevel["Experienced"] = 1] = "Experienced";
    TeacherLevel[TeacherLevel["Senior"] = 2] = "Senior";
})(TeacherLevel = exports.TeacherLevel || (exports.TeacherLevel = {}));
// the concrete class 'extends' the abstract base class: inheritance!
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(person_1.Person));
exports.Teacher = Teacher;
