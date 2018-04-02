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
var discussion_service_1 = require("./discussion.service");
var facebook_service_1 = require("../facebook.service");
var router_1 = require("@angular/router");
var Product_1 = require("../model/Product");
var UserReviews_1 = require("../model/UserReviews");
var DiscussionsComponent = (function () {
    function DiscussionsComponent(discussionService, fb, router) {
        this.discussionService = discussionService;
        this.fb = fb;
        this.router = router;
        this.isLoggedIn = false;
        this.onPostDiscussionClick = function () {
            var _this = this;
            if (this.isRatingRequired === false) {
                this.discussionService.postDiscussion(this.url, this.userLoginName, this.newReview);
            }
            else {
                //call post code from ProductDetails with Ratings(this.url, this.userLoginName, this.newReview)
                //let updatedReview  = new UserReviews(null,this.userLoginName,this.newReview,this.updatedRating);
                if (!this.updatedUserReview) {
                    this.updatedUserReview = new UserReviews_1.UserReviews(null, null, null, null);
                }
                this.updatedUserReview['userid'] = this.userLoginName;
                this.updatedUserReview['comment'] = this.newReview;
                //ToDo post call to new Service
                console.log("logging rating before posting" + JSON.stringify(this.updatedUserReview));
                this.discussionService.postUserReviews(this.url + "/reviews", this.updatedUserReview).subscribe(function (data) {
                    console.log("logging Response from POST " + data);
                    _this.getDiscussion();
                    //post rating //
                    if (_this.updatedUserReview.rating && _this.updatedUserReview.rating !== 0) {
                        _this.product['rating'].totalrating += _this.updatedUserReview.rating;
                        _this.product['rating'].usersvoted += 1;
                        //if product does not possess Rating.id means its a First Ever Rating for it
                        if (_this.product.rating.id && _this.product.rating.id !== null)
                            _this.discussionService.updateProductRating(_this.url, _this.product['rating']);
                        else
                            _this.discussionService.postProductRating(_this.url, _this.product['rating']);
                    }
                });
            }
            this.getDiscussion();
            this.onCancel();
        };
        this.stars = [false, false, false, false, false];
        console.log(this.product);
    }
    DiscussionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.checkStatus().then(function (response) {
            _this.isLoggedIn = response;
            console.log(response);
            if (response) {
                _this.fb.getName().then(function (response) {
                    _this.userLoginName = response;
                    console.log(response);
                });
            }
        });
        //this.isLoggedIn=true;
        //this.userLoginName="Omkar";
        this.initializeRatings();
        this.getDiscussion();
    };
    DiscussionsComponent.prototype.getDiscussion = function () {
        var _this = this;
        console.log("---------> " + this.isRatingRequired);
        if (this.isRatingRequired) {
            this.getUserReviews();
            console.log("-----------> " + this.url);
        }
        else {
            this.discussionService.getDiscussion(this.url).then(function (response) {
                _this.discussions = response;
            });
        }
    };
    DiscussionsComponent.prototype.onCancel = function () {
        this.newReview = '';
    };
    //ToDo: Testing
    DiscussionsComponent.prototype.getUserReviews = function () {
        var _this = this;
        this.discussionService.getUserReviews(this.url + "/reviews").then(function (data) {
            console.log(data);
            _this.userReviews = data;
        });
    };
    DiscussionsComponent.prototype.initializeRatings = function () {
        var _this = this;
        console.log(this.isRatingRequired + this.url + this.product);
        if (this.isRatingRequired && this.product.reviews) {
            //give the call to REST and populate stars for particular USER
            console.log(this.userLoginName);
            this.product.reviews.forEach(function (item) {
                if (item.userid === _this.userLoginName) {
                    _this.rating = item.rating;
                    _this.userReview = item; //setting item if UserReview is already present
                    return;
                }
                _this.rating = 0;
            });
            this.stars = [false, false, false, false, false];
            for (var i = 0; i <= this.rating - 1; i++) {
                this.stars[i] = true;
            }
            return;
        }
        this.stars = [false, false, false, false, false];
    };
    DiscussionsComponent.prototype.onStarClick = function (event) {
        //get 
        console.log(event);
        console.log("--------->" + event.clickValue + event.value);
        var ratingLocal = 0;
        if (event.value) {
            console.log("clickValue is " + event.clickValue);
            if (event.clickValue === true) {
                ratingLocal = event.value;
                this.stars = [false, false, false, false];
                for (var i = 0; i <= event.value - 1; i++) {
                    this.stars[i] = true;
                }
                console.log(event.value);
            }
            else {
                if (event.clickValue === false) {
                    this.stars = [true, true, true, true];
                    ratingLocal = event.value - 1;
                    for (var i = 4; i >= event.value - 1; i--) {
                        this.stars[i] = false;
                    }
                }
            }
        }
        console.log("stars Given" + ratingLocal);
        this.updatedUserReview = new UserReviews_1.UserReviews(null, null, null, ratingLocal);
        //give call to REST to update ratings
        //this.url = Product/-KXD_NdCjtrIjU0A6KV4/reviews
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DiscussionsComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DiscussionsComponent.prototype, "isRatingRequired", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product_1.Product)
    ], DiscussionsComponent.prototype, "product", void 0);
    DiscussionsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'discussions',
            templateUrl: 'discussions.component.html',
        }), 
        __metadata('design:paramtypes', [discussion_service_1.DiscussionService, facebook_service_1.FBService, router_1.Router])
    ], DiscussionsComponent);
    return DiscussionsComponent;
}());
exports.DiscussionsComponent = DiscussionsComponent;
//# sourceMappingURL=discussions.component.js.map