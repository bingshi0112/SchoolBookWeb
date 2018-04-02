import {Component, OnInit} from "@angular/core";
import {FBService} from "../facebook.service";
import {ProfileService} from "./profile.service";
import {Params, ActivatedRoute} from "@angular/router";
import {User} from "./userProfile";

@Component({
    moduleId: module.id,
    selector: 'otherUserProfile',
    templateUrl: './userProfile.component.html',
    styleUrls: ['userProfileStyle.component.css']
})
export class OtherUserProfileComponent implements OnInit {
    private userLoginName;
    private isLoggedIn;
    protected user: User;
    protected imageUrl: string = 'images/profilePicture.png';

    constructor(private fb: FBService, private _profileService: ProfileService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.fb.checkStatus().then((response) => {
            this.isLoggedIn = response;
            console.log(response);
            if (response) {
                this.fb.getName().then((response) => {
                    this.userLoginName = response;
                    console.log(response);
                    this.initializeUser();
                });
            }
        });
    }

    initializeUser() {
        let id: string;
        this.route.params.forEach((params: Params) => {

            id = params['id'];
            this.fb.getProfilePic(id).then(response => {
                this.imageUrl = response;
                console.log(response);
            });


            this._profileService.getProfile().then(
                data => {
                    data.forEach(user => {
                        console.log(user);
                        if (user['facebookID'] && user['facebookID'] === id) {
                            this.user = user;
                        }
                    })
                }
            );
        });


    }
}