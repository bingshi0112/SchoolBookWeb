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
 * Created by Gaurav on 17-11-2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var products_service_1 = require('../products.service');
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(_route, productService) {
        this._route = _route;
        this.productService = productService;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        this.isStarsRequired = true;
        this.product = this.productService.getProduct();
        if (this.product)
            this.productServiceUrl = "Product/" + this.product.id;
        console.log('Getting Product from productsService');
        //console.log(productService.getProduct());
    };
    /*ngOnInit(){
     console.log("Hello Ji");
   this._route.params.forEach((param:Param)=>{
      let val = param['prod'];
    this.product=val;
   });*/
    /*
    this._route.params.subscribe(params=>{
     console.log(JSON.stringify(params["prod"]));
     this.product=params["prod"];
     
    });*/
    ProductDetailsComponent.prototype.countStars = function () {
        var stars = 0;
        this.product.rating.star.forEach(function (e) {
            stars += e;
        });
        return stars;
    };
    ProductDetailsComponent.prototype.leaveReview = function ($event) {
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-details',
            templateUrl: 'productdetails.html',
            styleUrls: ['productdetails.css', './css/bootstrap.css', './css/bootstrap.min.css', './css/shop-item.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, products_service_1.ProductsService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=productdetails.component.js.map