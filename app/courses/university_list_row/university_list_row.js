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
var University_1 = require("../../model/University");
var UniversityListRowComponent = (function () {
    function UniversityListRowComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', University_1.University)
    ], UniversityListRowComponent.prototype, "university", void 0);
    UniversityListRowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'university-list-row',
            templateUrl: 'university_list_row.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], UniversityListRowComponent);
    return UniversityListRowComponent;
}());
exports.UniversityListRowComponent = UniversityListRowComponent;
//# sourceMappingURL=university_list_row.js.map