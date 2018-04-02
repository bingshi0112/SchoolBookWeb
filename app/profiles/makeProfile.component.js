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
var router_1 = require("@angular/router");
var userProfile_1 = require("./userProfile");
var profile_service_1 = require("./profile.service");
require("rxjs/add/operator/toPromise");
var facebook_service_1 = require("../facebook.service");
var MakeProfileComponent = (function () {
    function MakeProfileComponent(_profileService, _router, fb) {
        this._profileService = _profileService;
        this._router = _router;
        this.fb = fb;
        this.isLoggedIn = false;
        this.newUser = new userProfile_1.User(null, this.userId, "", "", "", "", "", "", "", "");
        this.submitted = false;
    }
    MakeProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.checkStatus().then(function (response) {
            _this.isLoggedIn = response;
            console.log(response);
            if (response) {
                _this.fb.getId().then(function (response) {
                    _this.userId = response;
                    console.log(response);
                });
            }
        });
    };
    MakeProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        this.newUser = new userProfile_1.User(null, this.userId, this.newUser.firstName, this.newUser.lastName, this.newUser.email, this.newUser.phoneNumber, this.newUser.school, this.newUser.education, this.newUser.proficiency, this.newUser.selfInfo);
        this._profileService.postProfile(this.newUser).then(function (resp) {
            _this._router.navigate(['/userProfile']);
        }).catch(function (err) {
            console.log(err);
        });
    };
    MakeProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'makeProfile',
            templateUrl: './makeProfile.component.html',
            styles: ["\n    .col-xs-2, .col-xs-8{\n      position: relative;\n      height: 100vh;\n      /*min-height: 670px;*/\n      background-color: #80CBC4;\n      background-image: url(\"./images/denim.png\");\n      color: white;\n      font-family: Helvetica, Arial, \"Times New Roman\", sans-serif;\n    }\n    #btnBack{\n      position: absolute;\n      margin: 0;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 240px;\n      height: 240px;\n      border-radius: 50%;\n      background-color: #2196F3 !important;\n    }\n    #back{\n      position: absolute;\n      margin: 0;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      font-size: 20px;\n      color: white;\n    }\n    #blankSpaceTop{\n      margin-top : 1%;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService, router_1.Router, facebook_service_1.FBService])
    ], MakeProfileComponent);
    return MakeProfileComponent;
}());
exports.MakeProfileComponent = MakeProfileComponent;
//# sourceMappingURL=makeProfile.component.js.map