import {Component, OnInit, OnDestroy} from "@angular/core";
import {CoursesListService} from "../course.service";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../model/Course";

@Component({
    moduleId: module.id,
    selector: 'course_detail',
    templateUrl: 'course_detail.component.html',
    styleUrls: ['course_detail.component.css','./css/bootstrap.css',
        './css/bootstrap.min.css','./css/shop-item.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
    private course: Course;
    private title: string;
    private sub;
    private url: string;

    constructor(private coursesListService: CoursesListService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            let uniId: string = params['uniId'];
            this.url = params['uniId'] + '/' + params['semId'] + '/' + params['id'] + '/' + 'discussion';

            this.coursesListService.getCourseById(params['uniId'], params['semId'], params['id']).then((response) => {
                this.course = response;
                this.title = this.course.department + ' ' + this.course.course_num;
            });
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}