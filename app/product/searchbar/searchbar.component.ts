import {Component, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import {FromEventObservable} from "rxjs/observable/FromEventObservable";


declare const $: any;


@Component({
    selector: 'search-bar',
    templateUrl: 'app/product/searchbar/searchbar.html',

})
export class SearchComponent {
    location: string;
    category: string;
    locations : string[];


    //Event
    @Output() submitSearch = new EventEmitter();

    constructor() {
        /*
        let debounced = (<any>window)._.debounce(function (text) {
            let loc =["SAN JOSE","SUNNYVALE","CUPERTINO"];
            loc.forEach(str=>{
               if(str.includes(text.toUpperCase())) {
                   this.locations.push(str);
               }

            });

        },400);
        $("#location").keyup( event => {
            var text = event.target.value;
            if(text < 3)
                return;

            debounced(text);
            console.log((<any>window)._);

        });*/

    }

    onInput($event) {

        if ($event.target.name === "location") {
            this.location = $event.target.value;
            console.log($("#location").val());
        }
        else if ($event.target.name === "category") {
            this.category = $event.target.value;
        }

    }

    onSubmit($event) {
        console.log($event);
        this.submitSearch.emit({location: this.location, category: this.category});
    }


}