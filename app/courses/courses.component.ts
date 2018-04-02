import {Component, OnInit} from "@angular/core";
import {CoursesListService} from "./course.service";
@Component({
    moduleId: module.id,
    selector: 'courses-list',
    templateUrl: 'courses.component.html',
    styleUrls: ['courses.css']
})

export class CoursesComponent implements OnInit {
    constructor(private coursesListService: CoursesListService) {
    }

    ngOnInit(): void {
    };

}

