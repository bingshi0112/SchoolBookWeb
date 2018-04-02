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
var SearchProfileComponent = (function () {
    function SearchProfileComponent(fb, _profileService) {
        this.fb = fb;
        this._profileService = _profileService;
        this.isLoggedIn = false;
    }
    SearchProfileComponent.prototype.ngOnInit = function () {
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
    SearchProfileComponent.prototype.initializeUser = function () {
        var _this = this;
        this._profileService.getProfile().then(function (data) {
            return _this.allUsers = data;
        });
    };
    SearchProfileComponent.prototype.onSearch = function () {
        var _this = this;
        this.users = [];
        this.allUsers.forEach(function (user) {
            console.log(_this.searchKeyWord);
            if (user.firstName.toLowerCase().indexOf(_this.searchKeyWord.toLowerCase()) >= 0
                || user.lastName.toLowerCase().indexOf(_this.searchKeyWord.toLowerCase()) >= 0) {
                _this.users.push(user);
            }
        });
    };
    SearchProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'searchProfile',
            templateUrl: './searchProfile.component.html',
            styleUrls: ['searchProfileStyle.component.css']
        }), 
        __metadata('design:paramtypes', [facebook_service_1.FBService, profile_service_1.ProfileService])
    ], SearchProfileComponent);
    return SearchProfileComponent;
}());
exports.SearchProfileComponent = SearchProfileComponent;
//# sourceMappingURL=searchProfile.component.js.map