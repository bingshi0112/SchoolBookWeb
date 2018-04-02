import {Component} from "@angular/core";
import {CoursesListService} from "../course.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Semester} from "../../model/Semester";
@Component({
    moduleId: module.id,
    selector: 'semester-list',
    templateUrl: 'semester_list.component.html',
    styleUrls: ['../courses.css']
})

export class SemesterListComponent {
    private semesters: Semester[];
    private uni: string;

    constructor(private coursesListService: CoursesListService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.uni = params['uni'];
            this.coursesListService.getSemestersPerUniversity(this.uni).then((response) => {
                this.semesters = response;
            });
        });

    };
}
