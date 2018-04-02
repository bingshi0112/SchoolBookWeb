/**
 * Created by Gaurav on 01-12-2016.
 */
"use strict";
var UserReviews = (function () {
    function UserReviews(reviewid, userid, comment, rating) {
        this.reviewid = reviewid;
        this.userid = userid;
        this.comment = comment;
        this.rating = rating;
    }
    return UserReviews;
}());
exports.UserReviews = UserReviews;
//# sourceMappingURL=UserReviews.js.map