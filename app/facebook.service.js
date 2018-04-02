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
var ng2_facebook_sdk_1 = require("ng2-facebook-sdk");
var FBService = (function () {
    function FBService(fb) {
        this.fb = fb;
        this.isFirstAttemp = true;
    }
    FBService.prototype.checkStatus = function () {
        return this.fb.getLoginStatus().then(function (response) {
            return response.status == 'connected';
        }, function (reject) {
            return false;
        });
    };
    FBService.prototype.getProfilePic = function (id) {
        return this.fb.api('/' + id + '/picture?redirect=false&type=large', 'get').then(function (response) {
            return response.data.url;
        }, function (reject) { return console.log(reject); });
    };
    FBService.prototype.getName = function () {
        return this.fb.api('me', 'get').then(function (response) {
            return response.name;
        }, function (reject) { return console.log(reject); });
    };
    FBService.prototype.setisLoggedIn = function (loggedIn) {
        this.isLoggedIn = loggedIn;
    };
    FBService.prototype.getisLoggedIn = function () {
        return this.isLoggedIn;
    };
    FBService.prototype.setisFirstAttempt = function (flag) {
        this.isFirstAttemp = flag;
    };
    FBService.prototype.getisFirstAttempt = function () {
        return this.isFirstAttemp;
    };
    FBService.prototype.getId = function () {
        return this.fb.api('me', 'get').then(function (response) {
            return response.id;
        }, function (reject) { return console.log(reject); });
    };
    FBService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_facebook_sdk_1.FacebookService])
    ], FBService);
    return FBService;
}());
exports.FBService = FBService;
//# sourceMappingURL=facebook.service.js.map