import {Component, OnInit} from "@angular/core";
import {CoursesListService} from "../course.service";
import {University} from "../../model/University";
@Component({
    moduleId: module.id,
    selector: 'university-list',
    templateUrl: 'university_list.component.html',
    styleUrls: ['../courses.css']
})

export class UniversityListComponent implements OnInit {
    private universities: University[];

    constructor(private coursesListService: CoursesListService) {
    }

    ngOnInit(): void {
        this.coursesListService.getUniversityList().then((response) => {
            this.universities = response;
        });
    };
}
