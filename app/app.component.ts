import {Component} from "@angular/core";
import {FacebookService, FacebookLoginResponse, FacebookInitParams} from "ng2-facebook-sdk";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'

})
export class AppComponent {
    constructor(private fb: FacebookService) {
        let fbParams: FacebookInitParams = {
            appId: '1007172955961243',
            xfbml: true,
            version: 'v2.6'
        };
        this.fb.init(fbParams);
    }
}
