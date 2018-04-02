/**
 * Created by Gaurav on 20-11-2016.
 */
"use strict";
var Product_1 = require('../../model/Product');
var User_1 = require('../../model/User');
var Ratings_1 = require("../../model/Ratings");
var UserReviews_1 = require("../../model/UserReviews");
var Mapper = (function () {
    function Mapper() {
        this.JM = require('node_modules/json-mapper/json-mapper.js');
    }
    Mapper.prototype.mapToProduct = function (fireBaseProduct, firebaseID) {
        var productConverter = this.JM.makeConverter({
            name: function (input) {
                return input.name;
            },
            category: function (input) {
                return input.category;
            },
            price: function (input) {
                return input.price;
            },
            isAvailable: function (input) {
                return input.isAvailable;
            },
            imageUrl: function (input) {
                return input.imageUrl;
            },
            Owner: function (input) {
                var userObj = input["Owner"].User;
                var ID = Object.keys(userObj)[0];
                console.log(ID);
                var user = userObj[ID];
                return new User_1.User("1", user.name, user.name, user.email);
            },
            buyer: function (input) {
                if (input["buyer"] && input["buyer"] !== null) {
                    var userObj = input["buyer"].User;
                    var ID = Object.keys(userObj)[0];
                    console.log(ID);
                    var user = userObj[ID];
                    return new User_1.User("2", user.name, user.name, user.emailId);
                }
                return;
            },
            location: function (input) {
                if (input['location'])
                    return input['location'];
                return;
            },
            description: function (input) {
                if (input["description"])
                    return input.description;
                return;
            },
            rating: function (input) {
                if (input["rating"]) {
                    var ratObj = input["rating"];
                    var uniqueID = Object.keys(ratObj)[0];
                    var keyLessRatObj = ratObj[uniqueID];
                    var totalrating = keyLessRatObj["totalrating"];
                    var usersvoted = keyLessRatObj["usersvoted"];
                    var avg = 0;
                    if (usersvoted !== 0)
                        avg = totalrating / usersvoted; //3.7
                    var star = [0, 0, 0, 0, 0];
                    for (var i = 0; i < Math.trunc(avg); i++) {
                        star[i] = 1;
                    }
                    if (Number(avg.toPrecision(2)) - Math.trunc(avg) > 0) {
                        star[Math.trunc(avg)] = 0.5;
                    }
                    var ratings = new Ratings_1.Ratings(uniqueID, totalrating, usersvoted, avg, star);
                    return ratings;
                }
                return new Ratings_1.Ratings(null, 0, 0, 0, [0, 0, 0, 0, 0]);
            },
            reviews: function (input) {
                if (!input['reviews'])
                    return;
                var reviews = input['reviews'];
                var reviewArr = [];
                Object.keys(reviews).forEach(function (reviewKey) {
                    var reviewObj = reviews[reviewKey];
                    var content = reviewObj['comment'];
                    var userName = reviewObj['userid'];
                    reviewArr.push(new UserReviews_1.UserReviews(reviewKey, userName, content.comment, content.rating));
                });
                return reviewArr;
            }
        });
        var myProduct = productConverter(fireBaseProduct);
        console.log(productConverter(fireBaseProduct));
        var buyer = null;
        if (myProduct['buyer']) {
            buyer = myProduct['buyer'];
        }
        return new Product_1.Product(firebaseID, myProduct.name, myProduct.category, myProduct.price, myProduct.isAvailable, myProduct.imageUrl, myProduct.Owner, buyer, myProduct.location, myProduct.description, myProduct.rating, myProduct.reviews);
    };
    /*let product:Product = new Product(form.value.productname,form.value.category,form.value.price,true,
    "http://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    new User("ID2",form.value.firstname,form.value.firstname,form.value.email),null,
    "San Jose", form.value.descr);*/
    Mapper.prototype.mapToFireBaseProduct = function (product) {
        var fireBaseProductConverter = this.JM.makeConverter({
            name: function (product) {
                return product.name;
            },
            price: function (product) {
                return product.price;
            },
            isAvailable: function (product) {
                return product.isAvailable;
            },
            imageUrl: function (product) {
                return product.imageUrl;
            },
            category: function (product) {
                return product.category;
            },
            location: function (product) {
                return product.location;
            },
            Owner: function (product) {
                var ownerId = product.owner.id;
                var User = {};
                var user = User['User'] = {};
                user[ownerId] = { "name": product.owner.firstName,
                    "email": product.owner.emailId
                };
                return User;
            },
            buyer: function (product) {
                if (!product.buyer || product.buyer === null) {
                    return;
                }
                var buyerId = product.buyer.id;
                var User = {};
                var user = User['User'] = {};
                user[buyerId] = { "name": product.buyer.name,
                    "email": product.buyer.emailId };
                return User;
            },
            description: function (product) {
                return product.description;
            },
            rating: function (product) {
                if (product.rating && product.rating != null) {
                    //ToDo:see if there is really a need to Map this one
                    var ratingsObj = void 0;
                    ratingsObj.totalrating = product.rating.totalrating;
                    ratingsObj.usersvoted = product.rating.usersvoted;
                    //fireBaseObject will not have avg and star array should calculate it run-time
                    return ratingsObj;
                }
                return;
            },
            reviews: function (product) {
                if (product['reviews']) {
                    var myReviews = {};
                    product['reviews'].forEach(function (item) {
                        myReviews[item.reviewid] = { "user_name": item.userid,
                            "content": { "comment": item.comment, "rating": item.rating } };
                    });
                }
            }
        });
        var firebaseProduct = fireBaseProductConverter(product);
        console.log(firebaseProduct);
        return firebaseProduct;
    };
    return Mapper;
}());
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map