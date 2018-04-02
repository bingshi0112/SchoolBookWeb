import {Course} from "../model/Course";
import {Injectable} from "@angular/core";
import {University} from "../model/University";
import {Semester} from "../model/Semester";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Helper} from "../Helper";

@Injectable()
export class CoursesListService {
    constructor(private http: Http) {
    }

    getUniversityList(): Promise<University[]> {
        return this.http.get(Helper.buildUrl('')).toPromise().then(
            response => {
                let uni: University[] = [];

                Object.keys(response.json()).forEach((element) => {
                    uni.push(new University(element));
                });

                return uni;
            });
    }

    getSemestersPerUniversity(uni: string): Promise<Semester[]> {
        return this.http.get(Helper.buildUrl(uni)).toPromise().then(
            response => {
                let sem: Semester[] = [];

                Object.keys(response.json()).forEach((element) => {
                    sem.push(new Semester(element));
                });

                return sem;
            });
    }

    getCourseList(uni: string, sem: string): Promise<Course[]> {
        return this.http.get(Helper.buildUrl(uni + '/' + sem)).toPromise().then(
            response => {
                let courses: Course[] = [];

                let res = response.json();
                Object.keys(response.json()).forEach((courseElement) => {
                    let element = res[courseElement];
                    let course: Course = new Course(courseElement, uni, element.department, element.course_num, element.section,
                        element.prof, sem, element.teacherAssisstant, element.department);

                    courses.push(course);
                });

                return courses;
            });
    }

    getCourseById(uni: string, sem: string, courseId: string): Promise<Course> {
        return this.http.get(Helper.buildUrl(uni + '/' + sem + '/' + courseId)).toPromise().then(
            response => {
                let element = response.json();
                return new Course(courseId, uni, element.department, element.course_num, element.section,
                    element.prof, sem, element.teacherAssisstant, element.department);
            });
    }

    addNewCourse(url: string, course: Course): Promise<string> {
        url = Helper.buildUrl(url);
        let postPayload = JSON.stringify({
            course_num: course.course_num,
            department: course.department,
            description: course.description,
            prof: course.prof,
            section: course.section,
            teacherAssisstant: course.teacherAssisstant,
            discussion: []

        });
        return this.http.post(url, postPayload).toPromise().then(
            response => {
                return response.json();
            });
    }

}
