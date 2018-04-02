import {Component, OnInit} from "@angular/core";
import {CoursesListService} from "../course.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Course} from "../../model/Course";
@Component({
    moduleId: module.id,
    selector: 'courses-list',
    templateUrl: 'course_list.component.html',
    styleUrls: ['../courses.css']

})

export class CourseListComponent implements OnInit {
    private courseList: Course[];
    private semester: string;
    private uni: string;

    constructor(private coursesListService: CoursesListService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.uni = params['uni'];
            this.semester = params['semester'];
            this.coursesListService.getCourseList(this.uni, this.semester).then((response) => {
                this.courseList = response;
            });
        });

    };
}
