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
var Discussion_1 = require("../../model/Discussion");
var UserReviews_1 = require("../../model/UserReviews");
var DiscussionsListRowComponent = (function () {
    function DiscussionsListRowComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Discussion_1.Discussion)
    ], DiscussionsListRowComponent.prototype, "discussion", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', UserReviews_1.UserReviews)
    ], DiscussionsListRowComponent.prototype, "userReviews", void 0);
    DiscussionsListRowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'discussion-list-row',
            templateUrl: 'discussion_list_row.component.html',
            styleUrls: ['discussion_list_row.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DiscussionsListRowComponent);
    return DiscussionsListRowComponent;
}());
exports.DiscussionsListRowComponent = DiscussionsListRowComponent;
//# sourceMappingURL=discussion_list_row.js.map