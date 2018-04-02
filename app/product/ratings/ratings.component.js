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
/**
 * Created by Gaurav on 01-12-2016.
 */
var RatingsComponent = (function () {
    function RatingsComponent() {
        this.isClicked = false;
        this.starClicked = new core_1.EventEmitter();
    }
    RatingsComponent.prototype.clicked = function (event) {
        console.log(event);
        this.isClicked = !this.isClicked;
        this.starClicked.emit({ 'clickValue': this.isClicked, 'value': this.value });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RatingsComponent.prototype, "isClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RatingsComponent.prototype, "starClicked", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingsComponent.prototype, "value", void 0);
    RatingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ratings',
            template: "\n        <i class=\"glyphicon\" [class.glyphicon-star]=\"isClicked\" \n        [class.glyphicon-star-empty]=\"!isClicked\" (click)=\"clicked($event)\">\n        </i>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RatingsComponent);
    return RatingsComponent;
}());
exports.RatingsComponent = RatingsComponent;
//# sourceMappingURL=ratings.component.js.map