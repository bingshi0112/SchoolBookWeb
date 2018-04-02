/**
 * Created by Gaurav on 17-11-2016.
 */
import  {Component,OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Product} from '../../model/Product'
import {ProductsService} from '../products.service'

@Component({
 moduleId :module.id,
 selector:'product-details',
 templateUrl : 'productdetails.html',
 styleUrls:['productdetails.css','./css/bootstrap.css','./css/bootstrap.min.css','./css/shop-item.css']
})
export class ProductDetailsComponent implements OnInit{

    product:Product;
    productServiceUrl :string;
    isStarsRequired: boolean;
    
 constructor(private _route:ActivatedRoute ,private productService:ProductsService) {

 }

  ngOnInit() {
      this.isStarsRequired=true;
      this.product = this.productService.getProduct();
      if(this.product)
      this.productServiceUrl = "Product/"+this.product.id;

      console.log('Getting Product from productsService');
      //console.log(productService.getProduct());
  }

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
   countStars() : number {
    let stars = 0;
    this.product.rating.star.forEach(e=>{
       stars+=e;
    });
    return stars;
   }

    leaveReview($event) {

    }


 }
