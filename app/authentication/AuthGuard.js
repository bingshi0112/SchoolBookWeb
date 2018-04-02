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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var facebook_service_1 = require("../facebook.service");
/**
 * Created by Gaurav on 10-12-2016.
 */
var AuthGuard = (function () {
    function AuthGuard(_fbService, _router) {
        this._fbService = _fbService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        if (!this._fbService.getisFirstAttempt()) {
            return this._fbService.getisLoggedIn();
        }
        return this._fbService.checkStatus().then(function (data) {
            console.log("print");
            if (data && data === true) {
                //success
                _this._fbService.setisFirstAttempt(false);
                _this._fbService.setisLoggedIn(true);
                return true;
            }
            //redirect
            _this._router.navigate(['/home']);
            return false;
        });
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [facebook_service_1.FBService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=AuthGuard.js.map