"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Course_1 = require("../model/Course");
var core_1 = require("@angular/core");
var University_1 = require("../model/University");
var Semester_1 = require("../model/Semester");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var Helper_1 = require("../Helper");
var CoursesListService = (function () {
    function CoursesListService(http) {
        this.http = http;
    }
    CoursesListService.prototype.getUniversityList = function () {
        return this.http.get(Helper_1.Helper.buildUrl('')).toPromise().then(function (response) {
            var uni = [];
            Object.keys(response.json()).forEach(function (element) {
                uni.push(new University_1.University(element));
            });
            return uni;
        });
    };
    CoursesListService.prototype.getSemestersPerUniversity = function (uni) {
        return this.http.get(Helper_1.Helper.buildUrl(uni)).toPromise().then(function (response) {
            var sem = [];
            Object.keys(response.json()).forEach(function (element) {
                sem.push(new Semester_1.Semester(element));
            });
            return sem;
        });
    };
    CoursesListService.prototype.getCourseList = function (uni, sem) {
        return this.http.get(Helper_1.Helper.buildUrl(uni + '/' + sem)).toPromise().then(function (response) {
            var courses = [];
            var res = response.json();
            Object.keys(response.json()).forEach(function (courseElement) {
                var element = res[courseElement];
                var course = new Course_1.Course(courseElement, uni, element.department, element.course_num, element.section, element.prof, sem, element.teacherAssisstant, element.department);
                courses.push(course);
            });
            return courses;
        });
    };
    CoursesListService.prototype.getCourseById = function (uni, sem, courseId) {
        return this.http.get(Helper_1.Helper.buildUrl(uni + '/' + sem + '/' + courseId)).toPromise().then(function (response) {
            var element = response.json();
            return new Course_1.Course(courseId, uni, element.department, element.course_num, element.section, element.prof, sem, element.teacherAssisstant, element.department);
        });
    };
    CoursesListService.prototype.addNewCourse = function (url, course) {
        url = Helper_1.Helper.buildUrl(url);
        var postPayload = JSON.stringify({
            course_num: course.course_num,
            department: course.department,
            description: course.description,
            prof: course.prof,
            section: course.section,
            teacherAssisstant: course.teacherAssisstant,
            discussion: []
        });
        return this.http.post(url, postPayload).toPromise().then(function (response) {
            return response.json();
        });
    };
    CoursesListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CoursesListService);
    return CoursesListService;
}());
exports.CoursesListService = CoursesListService;
//# sourceMappingURL=course.service.js.map