import {Injectable} from "@angular/core";
import {FacebookService} from "ng2-facebook-sdk";

@Injectable()
export class FBService {
    userName : string;
    isLoggedIn : boolean;
    isFirstAttemp : boolean;

    constructor(private fb: FacebookService) {
        this.isFirstAttemp=true;
    }

    checkStatus(): Promise<boolean> {
        return this.fb.getLoginStatus().then(
            (response) => {
                return response.status == 'connected';
            },
            (reject) => {
                return false;
            }
        );
    }

    getProfilePic(id): Promise<string> {
        return this.fb.api('/' + id + '/picture?redirect=false&type=large', 'get').then(
            (response) => {
                return response.data.url;
            },
            (reject) => console.log(reject)
        );
    }

    getName(): Promise<string> {
        return this.fb.api('me', 'get').then(
            (response) => {
                return response.name;
            },
            (reject) => console.log(reject)
        );
    }

    setisLoggedIn(loggedIn : boolean) {
        this.isLoggedIn =loggedIn;
    }

    getisLoggedIn() : boolean {
        return this.isLoggedIn;
    }

    setisFirstAttempt(flag:boolean) {
        this.isFirstAttemp=flag;
    }

    getisFirstAttempt() {
        return this.isFirstAttemp;
    }

    getId(): Promise<string> {
        return this.fb.api('me', 'get').then(
            (response) => {
                return response.id;
            },
            (reject) => console.log(reject)
        );
    }
}