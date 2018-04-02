import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Helper} from "../Helper";
import {Discussion} from "../model/Discussion";
import {UserReviews} from "../model/UserReviews";
import "rxjs/add/operator/map";


@Injectable()
export class DiscussionService {
    constructor(private http: Http) {
    }

    postDiscussion(url: string, user: string, content: string): Promise<string> {
        url = Helper.buildUrl(url);
        let postPayload = JSON.stringify({user_name: user, content: content});
        return this.http.post(url, postPayload).toPromise().then(
            response => {
                return response.json();
            });
    }

    getDiscussion(url: string): Promise<Discussion[]> {
        url = Helper.buildUrl(url);
        return this.http.get(url).toPromise().then(
            response => {
                let discussions: Discussion[] = [];
                let res = response.json();

                Object.keys(res).forEach((element) => {
                    discussions.push(new Discussion(element, res[element].user_name, res[element].content));
                });

                return discussions;
            });
    }

    postUserReviews(url: string, userReview: UserReviews) {
        url = Helper.buildProductUrl(url);
        /*this.http.post(url,{'user_name':userReview.userid,'content':userReview.comment,
         'rating':userReview.rating})*/
        //userReview['rating'] = this.rating;
        return this.http.post(url, JSON.stringify(userReview)).map(resp => {
            return resp.json()
        });
    }


    getUserReviews(url: string): Promise<UserReviews[]> {
        url = Helper.buildProductUrl(url);

        return this.http.get(url).toPromise().then(
            response => {
                let userReviews: UserReviews[] = [];
                let resp = response.json();
                if (resp && resp !== null) {
                    Object.keys(resp).forEach(elem => {
                        console.log(elem);
                        console.log(resp[elem].user_name);
                        console.log(resp[elem].content);
                        console.log(resp[elem].rating);
                        userReviews.push(new UserReviews(elem, resp[elem].userid, resp[elem].comment,
                            resp[elem].rating));
                    });
                    return userReviews;
                }
                return userReviews;
            });
    }

    postProductRating(url: string, ratings: any) {
        //let totalRatingUrl = Helper.buildUrl(url+"/rating/totalrating");
        //let usersvotedUrl = Helper.buildUrl(url+"/rating/usersvoted");
        let totalRatingUrl = Helper.buildProductUrl(url + "/rating");//Helper.buildUrl(url+"/rating");
        console.log(ratings['totalrating']);
        console.log(ratings['usersvoted']);
        return this.http.post(totalRatingUrl, {
            'totalrating': ratings['totalrating'],
            'usersvoted': ratings['usersvoted']
        })
            .toPromise().then(
                resp => {
                    console.log(resp.json());
                }
            ).catch(err => {
                console.log(err)
            });
    }

    updateProductRating(url: string, ratings: any) {
        let ratingUrl = Helper.buildProductUrl(url + "/rating/" + ratings.id);
        return this.http.put(ratingUrl, {
            'totalrating': ratings['totalrating'],
            'usersvoted': ratings['usersvoted']
        }).toPromise().then(
            response => {
                console.log(response);
            }
        ).catch(err => {
            console.log(err);
        });
    }

}