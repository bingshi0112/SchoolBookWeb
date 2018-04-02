/**
 * Created by Gaurav on 14-11-2016.
 */
import {User} from "./User";
import {Ratings} from "./Ratings";
import {UserReviews} from "./UserReviews";
export class Product {

    constructor(
        public id:string,
        public name:string,//done
        public category:string,//category done
        public price:number,//done
        public isAvailable:boolean,//done
        public imageUrl:string,
        public owner:User,
        public buyer:User,//buyer done
        public location:string,
        public description:string,
        public rating : Ratings,
        public reviews: UserReviews[]
        ){

    }
}