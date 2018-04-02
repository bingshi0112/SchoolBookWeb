import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Injectable} from "@angular/core";
import {User} from "./userProfile";

@Injectable()
export class ProfileService {

    url: string;

    constructor(private _httpService: Http) {
        this.url = 'https://profiledatabase-c616b.firebaseio.com/User.json';
    }

    postProfile(user: User): Promise<any> {

        return this._httpService.post(this.url, JSON.stringify(user)).toPromise().then(
            response => {
                console.log(response);
                return response.json();
            }
        );
    }

    getProfile(): Promise<User[]> {
        let users: User[] = [];
        return this._httpService.get(this.url).toPromise().then(
            response => {
                let resp = response.json();
                Object.keys(resp).forEach(
                    key => {
                        let user = resp[key];
                        //console.log(user);
                        user.firebaseID = key; //storing firebaseID  for in memory access
                        users.push(user);
                    }
                );
                return users;
            }).catch(err => {
            console.log(err);
        });
    }

}
