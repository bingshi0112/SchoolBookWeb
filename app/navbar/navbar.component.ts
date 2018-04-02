import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavBarComponent {

    userLoggedIn() {
        console.log("Hello!");
    }
}