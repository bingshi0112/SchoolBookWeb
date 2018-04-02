import {Component, OnInit} from "@angular/core";
import {FBService} from "../facebook.service";
import {User} from "./userProfile";
import {ProfileService} from "./profile.service";

@Component({
    moduleId: module.id,
    selector: 'userProfile',
    templateUrl: './userProfile.component.html',
    styleUrls: ['userProfileStyle.component.css']
})
export class UserProfileComponent implements OnInit {

    isLoggedIn: boolean = false;
    userId: string;
    user: User;
    imageUrl: string = 'images/profilePicture.png';

    constructor(private fb: FBService, private _profileService: ProfileService) {
    }

    ngOnInit() {
        this.fb.checkStatus().then((response) => {
            this.isLoggedIn = response;
            console.log(response);
            if (response) {
                this.fb.getId().then((response) => {
                    this.userId = response;
                    console.log(response);
                    this.initializeUser();
                });
            }
        });
    }

    initializeUser() {
        this.fb.getProfilePic(this.userId).then(response => {
            this.imageUrl = response;
            console.log(response);
        });

        this._profileService.getProfile().then(
            data => {
                let users: User[] = data;
                users.forEach(user => {
                    console.log(user);
                    if (user['facebookID'] && user['facebookID'] === this.userId) {
                        this.user = user;
                        console.log(this.user)
                    }
                })
            }
        );
    }
}
