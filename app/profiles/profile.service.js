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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var ProfileService = (function () {
    function ProfileService(_httpService) {
        this._httpService = _httpService;
        this.url = 'https://profiledatabase-c616b.firebaseio.com/User.json';
    }
    ProfileService.prototype.postProfile = function (user) {
        return this._httpService.post(this.url, JSON.stringify(user)).toPromise().then(function (response) {
            console.log(response);
            return response.json();
        });
    };
    ProfileService.prototype.getProfile = function () {
        var users = [];
        return this._httpService.get(this.url).toPromise().then(function (response) {
            var resp = response.json();
            Object.keys(resp).forEach(function (key) {
                var user = resp[key];
                //console.log(user);
                user.firebaseID = key; //storing firebaseID  for in memory access
                users.push(user);
            });
            return users;
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map