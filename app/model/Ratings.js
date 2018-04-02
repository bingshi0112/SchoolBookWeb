"use strict";
var Ratings = (function () {
    //productID, [userID,comment,rating]
    function Ratings(id, totalrating, usersvoted, avg, star) {
        this.id = id;
        this.totalrating = totalrating;
        this.usersvoted = usersvoted;
        this.avg = avg;
        this.star = star;
    }
    return Ratings;
}());
exports.Ratings = Ratings;
//# sourceMappingURL=Ratings.js.map