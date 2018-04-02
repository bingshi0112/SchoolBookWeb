import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile.component";
import {SearchProfileComponent} from "./searchProfile.component";
import {UserProfileComponent} from "./userProfile.component";
import {MakeProfileComponent} from "./makeProfile.component";
import {OtherUserProfileComponent} from "./otherUserProfile.component";

const routing = [
    {path: 'profiles', component: ProfileComponent},
    {path: 'searchProfile', component: SearchProfileComponent},
    {path: 'userProfile', component: UserProfileComponent},
    {path: 'makeProfile', component: MakeProfileComponent},
    {path: 'profile/:id', component: OtherUserProfileComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routing)
    ],
    exports: [
        RouterModule
    ]
})

export class ProfileRoutingModule {
}
