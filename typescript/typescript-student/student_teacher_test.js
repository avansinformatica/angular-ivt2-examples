"use strict";
exports.__esModule = true;
var student_1 = require("./student");
var teacher_1 = require("./teacher");
// Let's test a student and a teacher object
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
console.log(std);
console.log(tch);
