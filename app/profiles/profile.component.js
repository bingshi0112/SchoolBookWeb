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
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            template: "\n  <div class = \"container-fluid\">\n    <div class = \"row\">\n      <div class = \"col-xs-4\"></div>\n      <div class = \"col-xs-4\"></div>\n      <div class = \"col-xs-4\"></div>\n    </div>\n    <div class = \"row\">\n      <div class = \"col-xs-4\" id = \"circle\">\n        <a class = \"btn btn-default\" routerLink=\"/searchProfile\"><p id = \"links\">Searching a profile</p></a>\n      </div>\n      <div class = \"col-xs-4\" id = \"circle\">\n        <a class = \"btn btn-default\" routerLink=\"/userProfile\"><p id = \"links\">Access to your profile</p></a>\n      </div>\n      <div class = \"col-xs-4\" id = \"circle\">\n        <a class = \"btn btn-default\" routerLink=\"/makeProfile\"><p id = \"links\">Make your profile</p></a>\n      </div>\n    </div>\n    <div class = \"row\">\n      <div class = \"col-xs-4\"></div>\n      <div class = \"col-xs-4\"></div>\n      <div class = \"col-xs-4\"></div>\n    </div>\n  </div>\n\n  <router-outlet></router-outlet>\n\n\n  ",
            styles: ["\n    .row{\n      position: relative;\n      background-color: #80CBC4;\n    }\n    .col-xs-4{\n      height: 33vh;\n    }\n    .btn{\n      position: absolute;\n      margin: 0;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 240px;\n      height: 240px;\n      border-radius: 50%;\n      background-color: #2196F3 !important;\n    }\n    #links{\n      position: absolute;\n      margin: 0;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      font-size: 20px;\n      color: white;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map