"use strict";
var Product = (function () {
    function Product(id, name, //done
        category, //category done
        price, //done
        isAvailable, //done
        imageUrl, owner, buyer, //buyer done
        location, description, rating, reviews) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.isAvailable = isAvailable;
        this.imageUrl = imageUrl;
        this.owner = owner;
        this.buyer = buyer;
        this.location = location;
        this.description = description;
        this.rating = rating;
        this.reviews = reviews;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map