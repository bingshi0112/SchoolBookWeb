import {Injectable} from '@angular/core'
import {CanActivate,Router} from "@angular/router";
import {FBService} from "../facebook.service";

/**
 * Created by Gaurav on 10-12-2016.
 */

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _fbService : FBService,private _router:Router) {}
    
    canActivate() : Promise<boolean> | boolean {
        if(!this._fbService.getisFirstAttempt()) {

            return this._fbService.getisLoggedIn();
        }
    return this._fbService.checkStatus().then(
        
        data => {
            console.log("print");
             if(data && data===true) {
                 //success
                 this._fbService.setisFirstAttempt(false);
                 this._fbService.setisLoggedIn(true);
                 return true;
             }
            //redirect
            this._router.navigate(['/home']);
            return false;
        }
    );
    }
}