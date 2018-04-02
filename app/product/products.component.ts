/**
 * Created by Gaurav on 14-11-2016.
 */
import {Component,OnInit} from '@angular/core'
import {Product} from '../model/Product'
import {User} from "../model/User"
//import "rxjs/add/operator/toPromise";
import {ProductsService} from './products.service'


@Component({
    moduleId : module.id,
    selector:'products',
    templateUrl:'products.html',
    styleUrls:['products.css']
})
export class ProductsComponent {
    // this list will be fetched from Rest-Service later
    productList : Product[];




    constructor(private productService:ProductsService){

         productService.getProducts().then(
             (productArray) => {
                 console.log('Promise fulfilled');
                 this.productList=productArray;
            }
         );
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
    }// end of constructor

    /*
    ngOnInit(): void {
        this.productList ;
    }*/
    onSearchSubmit($event){

        this.productService.getProducts().then(
            (productArray) => {
                console.log('Promise fulfilled');
                this.productList=productArray;
                console.log('logging event from search bar');
                //console.log($event);
                let location = $event.location;
                let category = $event.category;
                if(location){location=location.toUpperCase()}
                if(category){category=category.toUpperCase()}

                let searchResult:Product[] =[];
                if(location || category) {
                    this.productList.forEach( product => {
                        if(location && category) {
                            if(product.category.toUpperCase()===category && product.location.toUpperCase()===location) {
                                searchResult.push (product);
                            }
                        }
                        else if(location){
                            if(product.location.toUpperCase()===location) {
                                searchResult.push (product);
                            }
                        }
                        else if(category){
                            if(product.category.toUpperCase()===category) {
                                searchResult.push (product);
                            }
                        }
                    });
                    //  if(searchResult && searchResult.length > 0)
                        this.productList=searchResult;

                    return;
                }
            }
        );
    }



    starIsClicked($event) {
        //ToDo increment int value in Product
        console.log("can not rate from Products page you have to enter into product-details page");
    }


    productSelected($event,p) {
        console.log('logging event from anchor');
        console.log($event);
        console.log(p);
        //setting product for product display page
        this.productService.setProduct(p);
    }



}