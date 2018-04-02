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
var UserProfileComponent = (function () {
    function UserProfileComponent(fb, _profileService) {
        this.fb = fb;
        this._profileService = _profileService;
        this.isLoggedIn = false;
        this.imageUrl = 'images/profilePicture.png';
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.checkStatus().then(function (response) {
            _this.isLoggedIn = response;
            console.log(response);
            if (response) {
                _this.fb.getId().then(function (response) {
                    _this.userId = response;
                    console.log(response);
                    _this.initializeUser();
                });
            }
        });
    };
    UserProfileComponent.prototype.initializeUser = function () {
        var _this = this;
        this.fb.getProfilePic(this.userId).then(function (response) {
            _this.imageUrl = response;
            console.log(response);
        });
        this._profileService.getProfile().then(function (data) {
            var users = data;
            users.forEach(function (user) {
                console.log(user);
                if (user['facebookID'] && user['facebookID'] === _this.userId) {
                    _this.user = user;
                    console.log(_this.user);
                }
            });
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userProfile',
            templateUrl: './userProfile.component.html',
            styleUrls: ['userProfileStyle.component.css']
        }), 
        __metadata('design:paramtypes', [facebook_service_1.FBService, profile_service_1.ProfileService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component.js.map