/**
 * Created by Gaurav on 15-11-2016.
 */
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
var http_1 = require('@angular/http');
require("rxjs/add/operator/toPromise");
require('rxjs/add/operator/map');
var mapper_1 = require("./util/mapper");
var ProductsService = (function () {
    function ProductsService(_httpService) {
        this._httpService = _httpService;
        this.mapper = new mapper_1.Mapper();
        //this.mapper.convert();
    }
    //https://products-d4caf.firebaseio.com/Product //https://project-9827f.firebaseio.com
    ProductsService.prototype.getProducts = function () {
        var _this = this;
        //ToDo: we should call REST get with {category,Location} and return Promise<Product[]>
        return this._httpService.get("https://products-d4caf.firebaseio.com/Product.json").toPromise().
            then(function (response) {
            console.log("Printing Response from firebase  " + response.json());
            var rawObj = response.json();
            var products = [];
            Object.keys(rawObj).forEach(function (elementID) {
                var myelement = rawObj[elementID];
                //call Mapper
                console.log("this is the ProductKey-->  " + elementID);
                var myProduct = _this.mapper.mapToProduct(myelement, elementID);
                console.log("Printing Mapped Product");
                console.log(JSON.stringify(myProduct));
                products.push(myProduct);
            });
            //return productList;
            return products;
        }).catch(function (error) {
            if (error || error !== null)
                console.log(error);
        });
        //return productList;
    };
    ProductsService.prototype.postProduct = function (product) {
        return this._httpService.post("https://products-d4caf.firebaseio.com/Product.json", JSON.stringify(product))
            .map(function (resp) { return resp.json(); });
    };
    ProductsService.prototype.setProduct = function (prod) {
        this.prod = prod;
    };
    ProductsService.prototype.getProduct = function () {
        return this.prod;
    };
    ProductsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map