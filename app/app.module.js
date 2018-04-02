"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AuthGuard_1 = require("./authentication/AuthGuard");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var courses_component_1 = require("./courses/courses.component");
var course_detail_component_1 = require("./courses/course_detail/course_detail.component");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var course_service_1 = require("./courses/course.service");
var http_1 = require("@angular/http");
var discussions_component_1 = require("./discussion/discussions.component");
var discussion_list_row_1 = require("./discussion/discussion_list_row/discussion_list_row");
var discussion_service_1 = require("./discussion/discussion.service");
var ng2_facebook_sdk_1 = require("ng2-facebook-sdk");
var products_component_1 = require("./product/products.component");
var productdetails_component_1 = require("./product/productDetails/productdetails.component");
var registerproduct_component_1 = require("./product/registerProduct/registerproduct.component");
var products_service_1 = require("./product/products.service");
var searchbar_component_1 = require("./product/searchbar/searchbar.component");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./home/home.component");
var searchProfile_component_1 = require("./profiles/searchProfile.component");
var userProfile_component_1 = require("./profiles/userProfile.component");
var makeProfile_component_1 = require("./profiles/makeProfile.component");
var profile_component_1 = require("./profiles/profile.component");
var profile_routing_1 = require("./profiles/profile.routing");
var profile_service_1 = require("./profiles/profile.service");
var courses_routing_module_1 = require("./courses/courses-routing.module");
var course_list_1 = require("./courses/course_list/course_list");
var semester_list_1 = require("./courses/semester_list/semester_list");
var university_list_1 = require("./courses/university_list/university_list");
var home_news_component_1 = require("./home/home-news/home-news.component");
var hot_topic_component_1 = require("./home/hot-topic/hot-topic.component");
var home_profile_component_1 = require("./home/home-profile/home-profile.component");
var home_courses_component_1 = require("./home/home-courses/home-courses.component");
var home_discussion_component_1 = require("./home/home-discussion/home-discussion.component");
var home_trading_component_1 = require("./home/home-trading/home-trading.component");
var home_footer_component_1 = require("./home-footer/home-footer.component");
var navbar_component_1 = require("./navbar/navbar.component");
var course_registration_component_1 = require("./courses/course_registration/course_registration.component");
var summarypipe_1 = require("./product/customPipes/summarypipe");
var ratings_component_1 = require("./product/ratings/ratings.component");
var facebook_service_1 = require("./facebook.service");
var ng2_popup_1 = require("ng2-popup");
var hot_topic_feed_service_1 = require("./home/hot-topic/hot-topic-feed/hot-topic-feed.service");
var hot_topic_feed_component_1 = require("./home/hot-topic/hot-topic-feed/hot_topic_feed.component");
var otherUserProfile_component_1 = require("./profiles/otherUserProfile.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                profile_routing_1.ProfileRoutingModule,
                courses_routing_module_1.CoursesRoutingModule,
                ng2_popup_1.Ng2PopupModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'courses-list', component: courses_component_1.CoursesComponent },
                    { path: 'course-detail/:uniId/:semId/:id', component: course_detail_component_1.CourseDetailComponent },
                    { path: 'discussion', component: discussions_component_1.DiscussionsComponent },
                    /*Product*/
                    { path: 'products-list', component: products_component_1.ProductsComponent },
                    { path: 'products-list/product-details', component: productdetails_component_1.ProductDetailsComponent },
                    { path: 'register-product', component: registerproduct_component_1.RegisterProductComponent }
                ])],
            declarations: [app_component_1.AppComponent,
                /*Courses*/
                courses_component_1.CoursesComponent,
                course_detail_component_1.CourseDetailComponent,
                course_list_1.CourseListComponent,
                university_list_1.UniversityListComponent,
                semester_list_1.SemesterListComponent,
                discussion_list_row_1.DiscussionsListRowComponent,
                discussions_component_1.DiscussionsComponent,
                course_registration_component_1.CourseRegistrationComponent,
                /*Profiles*/
                searchProfile_component_1.SearchProfileComponent,
                userProfile_component_1.UserProfileComponent,
                makeProfile_component_1.MakeProfileComponent,
                profile_component_1.ProfileComponent,
                otherUserProfile_component_1.OtherUserProfileComponent,
                /*Products*/
                searchbar_component_1.SearchComponent,
                registerproduct_component_1.RegisterProductComponent,
                products_component_1.ProductsComponent,
                productdetails_component_1.ProductDetailsComponent,
                summarypipe_1.SummaryPipe,
                ratings_component_1.RatingsComponent,
                /*Home*/
                home_component_1.HomeComponent,
                home_news_component_1.HomeNewsComponent,
                hot_topic_component_1.HotTopicComponent,
                hot_topic_feed_component_1.HotTopicFeedComponent,
                home_profile_component_1.HomeProfileComponent,
                home_courses_component_1.HomeCoursesComponent,
                home_trading_component_1.HomeTradingComponent,
                home_discussion_component_1.HomeDiscussionComponent,
                /*Navbar*/
                navbar_component_1.NavBarComponent,
                /*footer*/
                home_footer_component_1.HomeFooterComponent
            ],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }, AuthGuard_1.AuthGuard, course_service_1.CoursesListService, discussion_service_1.DiscussionService, ng2_facebook_sdk_1.FacebookService, products_service_1.ProductsService, facebook_service_1.FBService, hot_topic_feed_service_1.FeedService, profile_service_1.ProfileService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map