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
var University_1 = require("../../model/University");
var Course_1 = require("../../model/Course");
var router_1 = require("@angular/router");
var ng2_popup_1 = require("ng2-popup");
var CourseRegistrationComponent = (function () {
    function CourseRegistrationComponent(coursesListService, router) {
        this.coursesListService = coursesListService;
        this.router = router;
        this.selectedUniversity = new University_1.University('selected');
        this.course = {};
    }
    CourseRegistrationComponent.prototype.openPopup = function () {
        var _this = this;
        this.popup.open(ng2_popup_1.Ng2MessagePopupComponent, {
            title: 'Course Registered',
            message: 'Your course is successfully registered',
            buttons: {
                OK: function () {
                    _this.popup.close();
                }
            }
        });
    };
    CourseRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coursesListService.getUniversityList().then(function (response) {
            _this.universities = response;
        });
    };
    CourseRegistrationComponent.prototype.onSubmited = function () {
        var _this = this;
        var url = this.course['uni'] + '/' + this.course['semester'];
        var newCourse = new Course_1.Course('', this.course['uni'], this.course['department'], this.course['course_num'], this.course['section'], this.course['prof'], this.course['semester'], this.course['ta'], this.course['description']);
        this.coursesListService.addNewCourse(url, newCourse).then(function (response) {
            _this.openPopup();
        });
    };
    CourseRegistrationComponent.prototype.onUpdateUniversity = function (uni) {
        var _this = this;
        this.coursesListService.getSemestersPerUniversity(uni).then(function (response) {
            _this.semesters = response;
        });
    };
    __decorate([
        core_1.ViewChild(ng2_popup_1.Ng2PopupComponent), 
        __metadata('design:type', ng2_popup_1.Ng2PopupComponent)
    ], CourseRegistrationComponent.prototype, "popup", void 0);
    CourseRegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course_registration',
            templateUrl: 'course_registration.component.html',
            styleUrls: ['../courses.css']
        }), 
        __metadata('design:paramtypes', [course_service_1.CoursesListService, router_1.Router])
    ], CourseRegistrationComponent);
    return CourseRegistrationComponent;
}());
exports.CourseRegistrationComponent = CourseRegistrationComponent;
//# sourceMappingURL=course_registration.component.js.map