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
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/map');
var SearchComponent = (function () {
    function SearchComponent() {
        /*
        let debounced = (<any>window)._.debounce(function (text) {
            let loc =["SAN JOSE","SUNNYVALE","CUPERTINO"];
            loc.forEach(str=>{
               if(str.includes(text.toUpperCase())) {
                   this.locations.push(str);
               }

            });

        },400);
        $("#location").keyup( event => {
            var text = event.target.value;
            if(text < 3)
                return;

            debounced(text);
            console.log((<any>window)._);

        });*/
        //Event
        this.submitSearch = new core_1.EventEmitter();
    }
    SearchComponent.prototype.onInput = function ($event) {
        if ($event.target.name === "location") {
            this.location = $event.target.value;
            console.log($("#location").val());
        }
        else if ($event.target.name === "category") {
            this.category = $event.target.value;
        }
    };
    SearchComponent.prototype.onSubmit = function ($event) {
        console.log($event);
        this.submitSearch.emit({ location: this.location, category: this.category });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "submitSearch", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-bar',
            templateUrl: 'app/product/searchbar/searchbar.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=searchbar.component.js.map