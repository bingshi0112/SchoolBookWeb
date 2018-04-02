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
var FeedService = (function () {
    function FeedService() {
        this.feeds = [
            "http://rss.cnn.com/rss/cnn_topstories.rss",
            "http://www.ed.gov/feed",
            "https://www.ted.com/themes/rss/id/6"
        ];
    }
    FeedService.prototype.getUserFeeds = function () {
        return this.feeds;
    };
    FeedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FeedService);
    return FeedService;
}());
exports.FeedService = FeedService;
//# sourceMappingURL=hot-topic-feed.service.js.map