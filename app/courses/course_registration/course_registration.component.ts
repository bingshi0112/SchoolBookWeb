import {Component, OnInit, ViewChild} from "@angular/core";
import {CoursesListService} from "../course.service";
import {University} from "../../model/University";
import {Semester} from "../../model/Semester";
import {Course} from "../../model/Course";
import {Router} from "@angular/router";
import {Ng2PopupComponent, Ng2MessagePopupComponent} from "ng2-popup";

@Component({
    moduleId: module.id,
    selector: 'course_registration',
    templateUrl: 'course_registration.component.html',
    styleUrls: ['../courses.css']
})
export class CourseRegistrationComponent implements OnInit {
    @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

    protected universities: University[];
    protected semesters: Semester[];

    protected selectedUniversity: University = new University('selected');

    course: Object = {};

    constructor(private coursesListService: CoursesListService, private router: Router) {
    }


    openPopup() {
        this.popup.open(Ng2MessagePopupComponent, {
            title: 'Course Registered',
            message: 'Your course is successfully registered',
            buttons: {
                OK: () => {
                    this.popup.close();
                }
            }
        });
    }

    ngOnInit(): void {
        this.coursesListService.getUniversityList().then((response) => {
            this.universities = response;
        });
    }

    onSubmited(): void {
        let url = this.course['uni'] + '/' + this.course['semester'];
        let newCourse: Course = new Course('', this.course['uni'], this.course['department'], this.course['course_num'],
            this.course['section'], this.course['prof'], this.course['semester'], this.course['ta'], this.course['description']);
        this.coursesListService.addNewCourse(url, newCourse).then((response) => {
            this.openPopup();
        });
    }

    onUpdateUniversity(uni: string): void {
        this.coursesListService.getSemestersPerUniversity(uni).then((response) => {
            this.semesters = response;
        });
    }
}