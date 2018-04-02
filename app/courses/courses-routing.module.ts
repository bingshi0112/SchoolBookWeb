/**
 * Created by lam on 11/22/2016.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CoursesComponent} from "./courses.component";
import {UniversityListComponent} from "./university_list/university_list";
import {SemesterListComponent} from "./semester_list/semester_list";
import {CourseListComponent} from "./course_list/course_list";
import {CourseRegistrationComponent} from "./course_registration/course_registration.component";
const appRoutes = [
    {
        path: 'courses-list',
        component: CoursesComponent,
        children: [
            {path: '', redirectTo: 'university-list'},
            {path: 'university-list', component: UniversityListComponent},
            {path: 'registration', component: CourseRegistrationComponent},
            {path: 'semester-list/:uni', component: SemesterListComponent},
            {path: 'courses/:uni/:semester', component: CourseListComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CoursesRoutingModule {
}
