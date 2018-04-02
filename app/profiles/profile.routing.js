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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var profile_component_1 = require("./profile.component");
var searchProfile_component_1 = require("./searchProfile.component");
var userProfile_component_1 = require("./userProfile.component");
var makeProfile_component_1 = require("./makeProfile.component");
var otherUserProfile_component_1 = require("./otherUserProfile.component");
var routing = [
    { path: 'profiles', component: profile_component_1.ProfileComponent },
    { path: 'searchProfile', component: searchProfile_component_1.SearchProfileComponent },
    { path: 'userProfile', component: userProfile_component_1.UserProfileComponent },
    { path: 'makeProfile', component: makeProfile_component_1.MakeProfileComponent },
    { path: 'profile/:id', component: otherUserProfile_component_1.OtherUserProfileComponent }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routing)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());
exports.ProfileRoutingModule = ProfileRoutingModule;
//# sourceMappingURL=profile.routing.js.map