import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "./userProfile";
import {ProfileService} from "./profile.service";
import "rxjs/add/operator/toPromise";
import {FBService} from "../facebook.service";
@Component({
    moduleId: module.id,
    selector: 'makeProfile',
    templateUrl: './makeProfile.component.html',
    styles: [`
    .col-xs-2, .col-xs-8{
      position: relative;
      height: 100vh;
      /*min-height: 670px;*/
      background-color: #80CBC4;
      background-image: url("./images/denim.png");
      color: white;
      font-family: Helvetica, Arial, "Times New Roman", sans-serif;
    }
    #btnBack{
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 240px;
      height: 240px;
      border-radius: 50%;
      background-color: #2196F3 !important;
    }
    #back{
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      color: white;
    }
    #blankSpaceTop{
      margin-top : 1%;
    }
    `]
})

export class MakeProfileComponent implements OnInit {

    isLoggedIn: boolean = false;
    userId: string;

    constructor(private _profileService: ProfileService, private _router: Router, private fb: FBService) {
    }

    ngOnInit() {
        this.fb.checkStatus().then((response) => {
            this.isLoggedIn = response;
            console.log(response);
            if (response) {
                this.fb.getId().then((response) => {
                    this.userId = response;
                    console.log(response);
                });
            }
        });
    }

    newUser = new User(null, this.userId, "", "", "", "", "", "", "", "");
    submitted = false;

    onSubmit(form) {
        this.submitted = true;
        this.newUser = new User(null, this.userId, this.newUser.firstName, this.newUser.lastName, this.newUser.email, this.newUser.phoneNumber, this.newUser.school, this.newUser.education, this.newUser.proficiency, this.newUser.selfInfo);
        this._profileService.postProfile(this.newUser).then(
            resp => {
                this._router.navigate(['/userProfile']);
            }
        ).catch(err => {
            console.log(err)
        });

    }
}
