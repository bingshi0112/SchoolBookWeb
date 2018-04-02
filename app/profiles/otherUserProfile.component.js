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
var facebook_service_1 = require("../facebook.service");
var profile_service_1 = require("./profile.service");
var router_1 = require("@angular/router");
var OtherUserProfileComponent = (function () {
    function OtherUserProfileComponent(fb, _profileService, route) {
        this.fb = fb;
        this._profileService = _profileService;
        this.route = route;
        this.imageUrl = 'images/profilePicture.png';
    }
    OtherUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.checkStatus().then(function (response) {
            _this.isLoggedIn = response;
            console.log(response);
            if (response) {
                _this.fb.getName().then(function (response) {
                    _this.userLoginName = response;
                    console.log(response);
                    _this.initializeUser();
                });
            }
        });
    };
    OtherUserProfileComponent.prototype.initializeUser = function () {
        var _this = this;
        var id;
        this.route.params.forEach(function (params) {
            id = params['id'];
            _this.fb.getProfilePic(id).then(function (response) {
                _this.imageUrl = response;
                console.log(response);
            });
            _this._profileService.getProfile().then(function (data) {
                data.forEach(function (user) {
                    console.log(user);
                    if (user['facebookID'] && user['facebookID'] === id) {
                        _this.user = user;
                    }
                });
            });
        });
    };
    OtherUserProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'otherUserProfile',
            templateUrl: './userProfile.component.html',
            styleUrls: ['userProfileStyle.component.css']
        }), 
        __metadata('design:paramtypes', [facebook_service_1.FBService, profile_service_1.ProfileService, router_1.ActivatedRoute])
    ], OtherUserProfileComponent);
    return OtherUserProfileComponent;
}());
exports.OtherUserProfileComponent = OtherUserProfileComponent;
//# sourceMappingURL=otherUserProfile.component.js.map