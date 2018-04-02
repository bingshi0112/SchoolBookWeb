/**
 * Created by Gaurav on 15-11-2016.
 */

import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/map';

import {Mapper} from "./util/mapper"
import {Product} from '../model/Product'



@Injectable()
export class ProductsService {
    prod: Product;
    mapper: Mapper;


    constructor(private _httpService :Http) {
        this.mapper = new Mapper();

        //this.mapper.convert();

    }
//https://products-d4caf.firebaseio.com/Product //https://project-9827f.firebaseio.com
    getProducts() : Promise<Product[]> {
     //ToDo: we should call REST get with {category,Location} and return Promise<Product[]>
       return  this._httpService.get("https://products-d4caf.firebaseio.com/Product.json").toPromise().
       then( (response)=> {
           console.log("Printing Response from firebase  "+response.json());
           var rawObj = response.json();
            let products : Product[]=[];
           Object.keys(rawObj).forEach(elementID => {
               var myelement = rawObj[elementID];
               //call Mapper
               console.log("this is the ProductKey-->  "+elementID);
               var myProduct =this.mapper.mapToProduct(myelement,elementID);
               console.log("Printing Mapped Product");
               console.log(JSON.stringify(myProduct));
               products.push(myProduct);
           });
           //return productList;
           return products;
           }
        ).catch(error=> {
           if(error || error!==null)
           console.log(error);
       } );
     //return productList;
    }

    postProduct(product) {
        return this._httpService.post("https://products-d4caf.firebaseio.com/Product.json",JSON.stringify(product))
            .map(resp => resp.json());
    }

    setProduct(prod):void {
        this.prod=prod;
    }

    getProduct() :Product {
    return this.prod;
    }
}