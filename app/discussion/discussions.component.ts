import {Component, Input, OnInit} from "@angular/core";
import {Discussion} from "../model/Discussion";
import {DiscussionService} from "./discussion.service";
import {FBService} from "../facebook.service";
import {Router} from "@angular/router";
import {Product} from "../model/Product";
import {UserReviews} from "../model/UserReviews";
declare const $: any;

@Component({
    moduleId: module.id,
    selector: 'discussions',
    templateUrl: 'discussions.component.html',
})

export class DiscussionsComponent implements OnInit {
    protected discussions: Discussion[];
    @Input() url: string;
    private newReview: string;
    protected isLoggedIn: boolean = false;
    private userLoginName: string;


    @Input() isRatingRequired : boolean;
    rating :number;
    stars : any[];
    @Input() product: Product;
    userReview: UserReviews;  //particular USER review
    updatedUserReview : UserReviews;  //set on onStarClick
    userReviews:UserReviews[];

    constructor(private discussionService: DiscussionService, private fb: FBService, private router: Router) {
        this.stars=[false,false,false,false,false];
        console.log(this.product);
    }

    onPostDiscussionClick = function () {
        if(this.isRatingRequired===false) {
            this.discussionService.postDiscussion(this.url, this.userLoginName, this.newReview);
        }
        else {
            //call post code from ProductDetails with Ratings(this.url, this.userLoginName, this.newReview)
            //let updatedReview  = new UserReviews(null,this.userLoginName,this.newReview,this.updatedRating);
            if(!this.updatedUserReview){//star is not clicked
                this.updatedUserReview = new UserReviews(null,null,null,null);
            }
            this.updatedUserReview['userid']=this.userLoginName;
            this.updatedUserReview['comment']=this.newReview;

            //ToDo post call to new Service
            console.log("logging rating before posting"+JSON.stringify(this.updatedUserReview));
            this.discussionService.postUserReviews(this.url+"/reviews",this.updatedUserReview).subscribe(
                data => {
                    console.log("logging Response from POST "+data);
                    this.getDiscussion();
                    //post rating //
                    if(this.updatedUserReview.rating && this.updatedUserReview.rating!==0) {
                        this.product['rating'].totalrating+=this.updatedUserReview.rating;
                        this.product['rating'].usersvoted+=1;
                        //if product does not possess Rating.id means its a First Ever Rating for it
                        if(this.product.rating.id && this.product.rating.id!==null)
                        this.discussionService.updateProductRating(this.url,this.product['rating']);
                        else //it means Rating.id was fetched hence instead of posting patch/Update it
                        this.discussionService.postProductRating(this.url,this.product['rating']);
                    }
                }
            );
        }
        this.getDiscussion();
        this.onCancel();
    };

    ngOnInit(): void {

        this.fb.checkStatus().then((response) => {
            this.isLoggedIn = response;
            console.log(response);
            if (response) {
                this.fb.getName().then((response) => {
                    this.userLoginName = response;
                    console.log(response);
                });
            }
        });
        //this.isLoggedIn=true;
        //this.userLoginName="Omkar";
        this.initializeRatings();
        this.getDiscussion();
    }



    getDiscussion(): void {
        console.log("---------> "+this.isRatingRequired);
        if(this.isRatingRequired) {
            this.getUserReviews();
            console.log("-----------> "+this.url);
        }
        else {
            this.discussionService.getDiscussion(this.url).then((response) => {
                this.discussions = response;
            });
        }

    }

    onCancel(): void {
        this.newReview = '';
    }
    //ToDo: Testing
    getUserReviews() {
        this.discussionService.getUserReviews(this.url+"/reviews").then(
            data => {
              console.log(data);
              this.userReviews = data;
            }
        );
    }

    initializeRatings() : void {
        console.log(this.isRatingRequired + this.url +this.product);
         if(this.isRatingRequired && this.product.reviews) {

         //give the call to REST and populate stars for particular USER
         console.log(this.userLoginName)
         this.product.reviews.forEach(item => {
            if(item.userid===this.userLoginName) {
            this.rating = item.rating;
                this.userReview = item; //setting item if UserReview is already present
            return;
            }
            this.rating=0;
            });
         this.stars=[false,false,false,false,false];
         for(var i=0;i<= this.rating-1;i++) {
         this.stars[i]=true;
         }
             return;
         }
        this.stars=[false,false,false,false,false];
    }



    onStarClick(event): void {
        //get 
        console.log(event);
        console.log("--------->"+event.clickValue + event.value);
        let ratingLocal =0;
        if( event.value){
            console.log("clickValue is "+ event.clickValue);
            if(event.clickValue===true) {
                ratingLocal = event.value;
                this.stars=[false,false,false,false];
                for(var i=0 ;i<=event.value-1;i++) {
                    this.stars[i]=true;
                }
                console.log(event.value);
            }
            else {
                if(event.clickValue===false) {
                    this.stars=[true,true,true,true];
                    ratingLocal = event.value-1;
                    for(var i=4;i>=event.value-1;i--) {
                    this.stars[i]=false;
                    }
                }
            }
        }
        console.log("stars Given"+ratingLocal);
        this.updatedUserReview = new UserReviews(null,null,null,ratingLocal);
        //give call to REST to update ratings
        //this.url = Product/-KXD_NdCjtrIjU0A6KV4/reviews
    }
}

