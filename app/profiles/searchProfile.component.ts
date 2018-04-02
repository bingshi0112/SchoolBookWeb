import {Component, OnInit} from "@angular/core";
import {User} from "./userProfile";
import {FBService} from "../facebook.service";
import {ProfileService} from "./profile.service";

@Component({
    moduleId: module.id,
    selector: 'searchProfile',
    templateUrl: './searchProfile.component.html',
    styleUrls: ['searchProfileStyle.component.css']
})

export class SearchProfileComponent implements OnInit {
    isLoggedIn: boolean = false;
    userLoginName: string;
    users: User[];
    protected searchKeyWord: string;
    protected allUsers: User[];

    constructor(private fb: FBService, private _profileService: ProfileService) {
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
        this._profileService.getProfile().then(data =>
            this.allUsers = data);
    }

    onSearch(): void {
        this.users = [];
        this.allUsers.forEach(user => {
            console.log(this.searchKeyWord);
            if (user.firstName.toLowerCase().indexOf(this.searchKeyWord.toLowerCase()) >= 0
                || user.lastName.toLowerCase().indexOf(this.searchKeyWord.toLowerCase()) >= 0) {
                this.users.push(user);
            }
        });
    }
}
