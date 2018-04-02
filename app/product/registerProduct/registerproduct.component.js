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
 * Created by Gaurav on 18-11-2016.
 */
var core_1 = require('@angular/core');
var facebook_service_1 = require("../../facebook.service");
var router_1 = require('@angular/router');
var Product_1 = require("../../model/Product");
var User_1 = require("../../model/User");
var products_service_1 = require("../products.service");
var mapper_1 = require("../util/mapper");
var RegisterProductComponent = (function () {
    function RegisterProductComponent(_productService, _router, fb) {
        this._productService = _productService;
        this._router = _router;
        this.fb = fb;
        this.isLoggedIn = false;
        //Observable.fromEvent($('#myform'),"");
        this.files = [];
        this.firebase = window.firebase;
        console.log("Prining firebase" + this.firebase);
        console.log();
    }
    RegisterProductComponent.prototype.log = function (para) {
        console.log(para);
    };
    RegisterProductComponent.prototype.ngOnInit = function () {
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
            else {
                _this._router.navigate(['/home']);
            }
        });
        //call REST service and assign it Categories
        this.categories = ["shoes", "toys", "cloths", "books"];
    };
    RegisterProductComponent.prototype.selectFile = function (fileInput) {
        console.log(fileInput);
        var fileList = fileInput.target.files;
        for (var i = 0; i < fileList.length; i++) {
            console.log(fileList[i]);
            this.files.push(fileList[i]);
        }
        console.log(this.files);
    };
    /*
     * public name:string,//done
     public category:string,//category done
     public price:number,//done
     public isAvailable:boolean,//done
     public imageUrl:string,//ToDo: HardCoded Image Url should be removed and Fected from ImageService
     public owner:User,
     public buyer:User,//buyer done
     public location:string*/
    /*ControlGroup --> Formgroup*/
    RegisterProductComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form);
        var name = form.value.firstname;
        var desc = form.value.descr;
        /*console.log(this.category);
        console.log(form.value.category);
        console.log(name);
        console.log(desc);*/
        console.log(this.files[0]);
        var auth = this.firebase.auth();
        var storageRef = this.firebase.storage().ref();
        var metadata = {
            'contentType': this.files[0].type
        };
        storageRef.child('images/' + this.files[0].name).put(this.files[0], metadata).then(function (snapshot) {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log(snapshot.metadata);
            var url = snapshot.metadata.downloadURLs[0];
            console.log('File available at', url);
            var product = new Product_1.Product(null, form.value.productname, form.value.category, form.value.price, true, url, new User_1.User(_this.userLoginName, form.value.firstname, form.value.firstname, form.value.email), null, form.value.loc, form.value.descr, null, null);
            console.log("Printing product before storing it" + product);
            var mapper = new mapper_1.Mapper();
            var firebaseObject = mapper.mapToFireBaseProduct(product);
            _this._productService.postProduct(firebaseObject).subscribe(function (resp) {
                console.log(resp);
                console.log('routing to products-list page');
                _this._router.navigate(['/products-list']);
            });
        }).catch(function (error) {
            // [START onfailure]
            console.error('Upload failed:', error);
            // [END onfailure]
        });
        //ToDo: User Ids
    };
    RegisterProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register-product',
            templateUrl: 'registerproduct.html',
            styleUrls: ['registerproduct.css']
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductsService, router_1.Router, facebook_service_1.FBService])
    ], RegisterProductComponent);
    return RegisterProductComponent;
}());
exports.RegisterProductComponent = RegisterProductComponent;
//# sourceMappingURL=registerproduct.component.js.map