import {Component, Input} from "@angular/core";
import {Discussion} from "../../model/Discussion";
import {UserReviews} from "../../model/UserReviews"
@Component({
    moduleId: module.id,
    selector: 'discussion-list-row',
    templateUrl: 'discussion_list_row.component.html',
    styleUrls: ['discussion_list_row.component.css']
})

export class DiscussionsListRowComponent {
    @Input() discussion: Discussion;

    @Input() userReviews: UserReviews;

}
