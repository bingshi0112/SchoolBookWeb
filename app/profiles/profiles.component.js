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
var ProfilesComponent = (function () {
    function ProfilesComponent() {
    }
    ProfilesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profiles',
            template: "\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-1\" id=\"rSideBar\"></div>\n      <div class=\"col-xs-8\" id=\"middleSection\">\n        <div class=\"row\">\n          <div class=\"col-xs-3\" id=\"profilePhoto\"><photo></photo></div>\n          <div class=\"col-xs-9\" id=\"personalInfo\">\n            <div class=\"row\">\n              <div class=\"col-xs-12\" id=\"name\"><name></name></div>\n              <div class=\"col-xs-12\" id=\"rate\"><rate></rate></div>\n              <div class=\"col-xs-12\" id=\"school\"><school></school></div>\n              <div class=\"col-xs-12\" id=\"experience\"><proficiency></proficiency></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\" id=\"bio\">Biography</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\" id=\"comments\">Comments</div>\n        </div>\n      </div>\n      <div class=\"col-xs-3\" id=\"lSideBar\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\" id=\"ads\">Ads you may be interested in</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12\" id=\"viewed\">people visited your page</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProfilesComponent);
    return ProfilesComponent;
}());
exports.ProfilesComponent = ProfilesComponent;
//# sourceMappingURL=profiles.component.js.map