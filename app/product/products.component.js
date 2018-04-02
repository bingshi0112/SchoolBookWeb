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
 * Created by Gaurav on 14-11-2016.
 */
var core_1 = require('@angular/core');
//import "rxjs/add/operator/toPromise";
var products_service_1 = require('./products.service');
var ProductsComponent = (function () {
    function ProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        productService.getProducts().then(function (productArray) {
            console.log('Promise fulfilled');
            _this.productList = productArray;
        });
        /*
        let debounced = (<any>window)._.debounce(function (text) {
            let loc =["SAN JOSE","SUNNYVALE","CUPERTINO"];
            loc.forEach(str=>{
                if(str.includes(text.toUpperCase())) {
                    console.log(str);
                    this.locations.push(str);
                }

            });

        },400);
        $("#location").keyup( event => {
            var text = event.target.value;
            if(text < 3)
                return;

            debounced(text);
            console.log((<any>window)._);

            });*/
    } // end of constructor
    /*
    ngOnInit(): void {
        this.productList ;
    }*/
    ProductsComponent.prototype.onSearchSubmit = function ($event) {
        var _this = this;
        this.productService.getProducts().then(function (productArray) {
            console.log('Promise fulfilled');
            _this.productList = productArray;
            console.log('logging event from search bar');
            //console.log($event);
            var location = $event.location;
            var category = $event.category;
            if (location) {
                location = location.toUpperCase();
            }
            if (category) {
                category = category.toUpperCase();
            }
            var searchResult = [];
            if (location || category) {
                _this.productList.forEach(function (product) {
                    if (location && category) {
                        if (product.category.toUpperCase() === category && product.location.toUpperCase() === location) {
                            searchResult.push(product);
                        }
                    }
                    else if (location) {
                        if (product.location.toUpperCase() === location) {
                            searchResult.push(product);
                        }
                    }
                    else if (category) {
                        if (product.category.toUpperCase() === category) {
                            searchResult.push(product);
                        }
                    }
                });
                //  if(searchResult && searchResult.length > 0)
                _this.productList = searchResult;
                return;
            }
        });
    };
    ProductsComponent.prototype.starIsClicked = function ($event) {
        //ToDo increment int value in Product
        console.log("can not rate from Products page you have to enter into product-details page");
    };
    ProductsComponent.prototype.productSelected = function ($event, p) {
        console.log('logging event from anchor');
        console.log($event);
        console.log(p);
        //setting product for product display page
        this.productService.setProduct(p);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'products',
            templateUrl: 'products.html',
            styleUrls: ['products.css']
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductsService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map