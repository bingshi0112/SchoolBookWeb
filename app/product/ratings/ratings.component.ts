import {Component,EventEmitter,Input,Output} from "@angular/core";
/**
 * Created by Gaurav on 01-12-2016.
 */


@Component({
    moduleId:module.id,
    selector:'ratings',
    template :`
        <i class="glyphicon" [class.glyphicon-star]="isClicked" 
        [class.glyphicon-star-empty]="!isClicked" (click)="clicked($event)">
        </i>
    `
})
export class RatingsComponent {
    @Input() isClicked : boolean;
    @Output() starClicked;
    @Input() value:number;

    constructor() {
        this.isClicked=false;
        this.starClicked = new EventEmitter();
    }

    clicked(event) {
        console.log(event);
        this.isClicked=!this.isClicked;
        this.starClicked.emit({'clickValue':this.isClicked,'value':this.value});
    }
}