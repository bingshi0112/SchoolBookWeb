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
var CourseDetailComponent = (function () {
    function CourseDetailComponent(coursesListService, route) {
        this.coursesListService = coursesListService;
        this.route = route;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var uniId = params['uniId'];
            _this.url = params['uniId'] + '/' + params['semId'] + '/' + params['id'] + '/' + 'discussion';
            _this.coursesListService.getCourseById(params['uniId'], params['semId'], params['id']).then(function (response) {
                _this.course = response;
                _this.title = _this.course.department + ' ' + _this.course.course_num;
            });
        });
    };
    CourseDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CourseDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'course_detail',
            templateUrl: 'course_detail.component.html',
            styleUrls: ['course_detail.component.css', './css/bootstrap.css',
                './css/bootstrap.min.css', './css/shop-item.css']
        }), 
        __metadata('design:paramtypes', [course_service_1.CoursesListService, router_1.ActivatedRoute])
    ], CourseDetailComponent);
    return CourseDetailComponent;
}());
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=course_detail.component.js.map