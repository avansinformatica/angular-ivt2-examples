"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var teacher_1 = require("./teacher");
var school_1 = require("./school");
// let's put a student and a teacher in a school
var std = new student_1.Student();
var tch = new teacher_1.Teacher();
// set some values for the student
std.firstName = "John";
std.lastName = "Doe";
std.birthDate = new Date(1999, 4, 7);
std.studentNumber = 1234567;
std.startDate = new Date(2016, 8, 1);
std.graduationDate = new Date(2020, 6, 1);
// set some values for the teacher
tch.startDate = new Date(2015, 3, 1);
tch.level = teacher_1.TeacherLevel.Beginner; // note: this is how to set an enum
// create a school
var school = new school_1.School();
school.people.push(std);
school.people.push(tch);
school.people.forEach(function (person) { return console.log(person); });
// same for a generic school
// let genschool = new GenericSchool<IPerson>();
var genschool = new school_1.GenericSchool(); // error when trying to 'push' a teacher!
genschool.people.push(std);
genschool.people.push(tch);
genschool.people.forEach(function (person) { return console.log(person); });
