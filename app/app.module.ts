import {NgModule} from "@angular/core";
import {AuthGuard} from "./authentication/AuthGuard";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CoursesComponent} from "./courses/courses.component";
import {CourseDetailComponent} from "./courses/course_detail/course_detail.component";
import {RouterModule} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import {CoursesListService} from "./courses/course.service";
import {HttpModule} from "@angular/http";
import {DiscussionsComponent} from "./discussion/discussions.component";
import {DiscussionsListRowComponent} from "./discussion/discussion_list_row/discussion_list_row";
import {DiscussionService} from "./discussion/discussion.service";
import {FacebookService} from "ng2-facebook-sdk";
import {ProductsComponent} from "./product/products.component";
import {ProductDetailsComponent} from "./product/productDetails/productdetails.component";
import {RegisterProductComponent} from "./product/registerProduct/registerproduct.component";
import {ProductsService} from "./product/products.service";
import {SearchComponent} from "./product/searchbar/searchbar.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";
import {SearchProfileComponent} from "./profiles/searchProfile.component";
import {UserProfileComponent} from "./profiles/userProfile.component";
import {MakeProfileComponent} from "./profiles/makeProfile.component";
import {ProfileComponent} from "./profiles/profile.component";
import {ProfileRoutingModule} from "./profiles/profile.routing";
import {ProfileService} from "./profiles/profile.service";
import {CoursesRoutingModule} from "./courses/courses-routing.module";
import {CourseListComponent} from "./courses/course_list/course_list";
import {SemesterListComponent} from "./courses/semester_list/semester_list";
import {UniversityListComponent} from "./courses/university_list/university_list";
import {HomeNewsComponent} from "./home/home-news/home-news.component";
import {HotTopicComponent} from "./home/hot-topic/hot-topic.component";
import {HomeProfileComponent} from "./home/home-profile/home-profile.component";
import {HomeCoursesComponent} from "./home/home-courses/home-courses.component";
import {HomeDiscussionComponent} from "./home/home-discussion/home-discussion.component";
import {HomeTradingComponent} from "./home/home-trading/home-trading.component";
import {HomeFooterComponent} from "./home-footer/home-footer.component";
import {NavBarComponent} from "./navbar/navbar.component";
import {CourseRegistrationComponent} from "./courses/course_registration/course_registration.component";
import {SummaryPipe} from "./product/customPipes/summarypipe";
import {RatingsComponent} from "./product/ratings/ratings.component";
import {FBService} from "./facebook.service";
import {Ng2PopupModule} from "ng2-popup";
import {FeedService} from "./home/hot-topic/hot-topic-feed/hot-topic-feed.service";
import {HotTopicFeedComponent} from "./home/hot-topic/hot-topic-feed/hot_topic_feed.component";
import {OtherUserProfileComponent} from "./profiles/otherUserProfile.component";

@NgModule({
    imports: [BrowserModule,
        HttpModule,
        FormsModule,
        ProfileRoutingModule,
        CoursesRoutingModule,
        Ng2PopupModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'home', component: HomeComponent},
            {path: 'courses-list', component: CoursesComponent},
            {path: 'course-detail/:uniId/:semId/:id', component: CourseDetailComponent},
            {path: 'discussion', component: DiscussionsComponent},

            /*Product*/
            {path: 'products-list', component: ProductsComponent},
            {path: 'products-list/product-details', component: ProductDetailsComponent},
            {path: 'register-product', component: RegisterProductComponent}
        ])],
    declarations: [AppComponent,
        /*Courses*/
        CoursesComponent,
        CourseDetailComponent,
        CourseListComponent,
        UniversityListComponent,
        SemesterListComponent,
        DiscussionsListRowComponent,
        DiscussionsComponent,
        CourseRegistrationComponent,

        /*Profiles*/
        SearchProfileComponent,
        UserProfileComponent,
        MakeProfileComponent,
        ProfileComponent,
        OtherUserProfileComponent,

        /*Products*/
        SearchComponent,
        RegisterProductComponent,
        ProductsComponent,
        ProductDetailsComponent,
        SummaryPipe,
        RatingsComponent,

        /*Home*/
        HomeComponent,
        HomeNewsComponent,
        HotTopicComponent,
        HotTopicFeedComponent,
        HomeProfileComponent,
        HomeCoursesComponent,
        HomeTradingComponent,
        HomeDiscussionComponent,

        /*Navbar*/
        NavBarComponent,

        /*footer*/
        HomeFooterComponent

    ],

    providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
    }, AuthGuard, CoursesListService, DiscussionService, FacebookService, ProductsService, FBService, FeedService, ProfileService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
