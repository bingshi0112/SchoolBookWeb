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
var core_1 = require("@angular/core");
var course_service_1 = require("../course.service");
var router_1 = require("@angular/router");
var CourseListComponent = (function () {
    function CourseListComponent(coursesListService, route) {
        this.coursesListService = coursesListService;
        this.route = route;
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.uni = params['uni'];
            _this.semester = params['semester'];
            _this.coursesListService.getCourseList(_this.uni, _this.semester).then(function (response) {
                _this.courseList = response;
            });
        });
    };
    ;
    CourseListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'courses-list',
            templateUrl: 'course_list.component.html',
            styleUrls: ['../courses.css']
        }), 
        __metadata('design:paramtypes', [course_service_1.CoursesListService, router_1.ActivatedRoute])
    ], CourseListComponent);
    return CourseListComponent;
}());
exports.CourseListComponent = CourseListComponent;
//# sourceMappingURL=course_list.js.map