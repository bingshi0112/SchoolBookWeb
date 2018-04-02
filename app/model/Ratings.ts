import {UserReviews} from "./UserReviews";
export class Ratings {
//productID, [userID,comment,rating]
    constructor(
        public id:string,
        public totalrating : number,
        public usersvoted :number,
        public avg :number,
        public star : any[]){

    }
}