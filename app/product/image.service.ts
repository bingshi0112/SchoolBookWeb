/**
 * Created by Gaurav on 19-11-2016.
 */
import {Product} from '../model/Product'
import {productList} from './productsdata'
import {Injectable} from "@angular/core";
import {Http,RequestOptionsArgs} from  '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
class ImageService {

    constructor(private _http : Http) {

    }

    postImages(contents){
        return this._http.post('url','body').map(res=>res.json());
    }
}