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
var http_1 = require("@angular/http");
var Helper_1 = require("../Helper");
var Discussion_1 = require("../model/Discussion");
var UserReviews_1 = require("../model/UserReviews");
require("rxjs/add/operator/map");
var DiscussionService = (function () {
    function DiscussionService(http) {
        this.http = http;
    }
    DiscussionService.prototype.postDiscussion = function (url, user, content) {
        url = Helper_1.Helper.buildUrl(url);
        var postPayload = JSON.stringify({ user_name: user, content: content });
        return this.http.post(url, postPayload).toPromise().then(function (response) {
            return response.json();
        });
    };
    DiscussionService.prototype.getDiscussion = function (url) {
        url = Helper_1.Helper.buildUrl(url);
        return this.http.get(url).toPromise().then(function (response) {
            var discussions = [];
            var res = response.json();
            Object.keys(res).forEach(function (element) {
                discussions.push(new Discussion_1.Discussion(element, res[element].user_name, res[element].content));
            });
            return discussions;
        });
    };
    DiscussionService.prototype.postUserReviews = function (url, userReview) {
        url = Helper_1.Helper.buildProductUrl(url);
        /*this.http.post(url,{'user_name':userReview.userid,'content':userReview.comment,
         'rating':userReview.rating})*/
        //userReview['rating'] = this.rating;
        return this.http.post(url, JSON.stringify(userReview)).map(function (resp) {
            return resp.json();
        });
    };
    DiscussionService.prototype.getUserReviews = function (url) {
        url = Helper_1.Helper.buildProductUrl(url);
        return this.http.get(url).toPromise().then(function (response) {
            var userReviews = [];
            var resp = response.json();
            if (resp && resp !== null) {
                Object.keys(resp).forEach(function (elem) {
                    console.log(elem);
                    console.log(resp[elem].user_name);
                    console.log(resp[elem].content);
                    console.log(resp[elem].rating);
                    userReviews.push(new UserReviews_1.UserReviews(elem, resp[elem].userid, resp[elem].comment, resp[elem].rating));
                });
                return userReviews;
            }
            return userReviews;
        });
    };
    DiscussionService.prototype.postProductRating = function (url, ratings) {
        //let totalRatingUrl = Helper.buildUrl(url+"/rating/totalrating");
        //let usersvotedUrl = Helper.buildUrl(url+"/rating/usersvoted");
        var totalRatingUrl = Helper_1.Helper.buildProductUrl(url + "/rating"); //Helper.buildUrl(url+"/rating");
        console.log(ratings['totalrating']);
        console.log(ratings['usersvoted']);
        return this.http.post(totalRatingUrl, {
            'totalrating': ratings['totalrating'],
            'usersvoted': ratings['usersvoted']
        })
            .toPromise().then(function (resp) {
            console.log(resp.json());
        }).catch(function (err) {
            console.log(err);
        });
    };
    DiscussionService.prototype.updateProductRating = function (url, ratings) {
        var ratingUrl = Helper_1.Helper.buildProductUrl(url + "/rating/" + ratings.id);
        return this.http.put(ratingUrl, {
            'totalrating': ratings['totalrating'],
            'usersvoted': ratings['usersvoted']
        }).toPromise().then(function (response) {
            console.log(response);
        }).catch(function (err) {
            console.log(err);
        });
    };
    DiscussionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DiscussionService);
    return DiscussionService;
}());
exports.DiscussionService = DiscussionService;
//# sourceMappingURL=discussion.service.js.map