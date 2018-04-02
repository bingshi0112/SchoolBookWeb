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
/**
 * Created by lam on 11/22/2016.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var courses_component_1 = require("./courses.component");
var university_list_1 = require("./university_list/university_list");
var semester_list_1 = require("./semester_list/semester_list");
var course_list_1 = require("./course_list/course_list");
var course_registration_component_1 = require("./course_registration/course_registration.component");
var appRoutes = [
    {
        path: 'courses-list',
        component: courses_component_1.CoursesComponent,
        children: [
            { path: '', redirectTo: 'university-list' },
            { path: 'university-list', component: university_list_1.UniversityListComponent },
            { path: 'registration', component: course_registration_component_1.CourseRegistrationComponent },
            { path: 'semester-list/:uni', component: semester_list_1.SemesterListComponent },
            { path: 'courses/:uni/:semester', component: course_list_1.CourseListComponent },
        ]
    },
];
var CoursesRoutingModule = (function () {
    function CoursesRoutingModule() {
    }
    CoursesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CoursesRoutingModule);
    return CoursesRoutingModule;
}());
exports.CoursesRoutingModule = CoursesRoutingModule;
//# sourceMappingURL=courses-routing.module.js.map