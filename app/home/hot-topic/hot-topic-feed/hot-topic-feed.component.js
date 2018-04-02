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
/**
 * Created by bing on 12/7/16.
 */
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require('rxjs/Rx');
var HotTopicFeedComponent = (function () {
    function HotTopicFeedComponent(http) {
        this.http = http;
    }
    HotTopicFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://demos.angular-craft.com/rss_service.php?url=' + this.url).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.data = res.responseData.feed;
            console.log(res);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HotTopicFeedComponent.prototype, "url", void 0);
    HotTopicFeedComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            moduleId: module.id,
            selector: 'hot-topic-feed',
            templateUrl: 'hot-topic-feed.component.html',
            styleUrls: ['hot-topic-feed.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HotTopicFeedComponent);
    return HotTopicFeedComponent;
}());
exports.HotTopicFeedComponent = HotTopicFeedComponent;
//# sourceMappingURL=hot-topic-feed.component.js.map