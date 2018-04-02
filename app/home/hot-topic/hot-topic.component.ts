import { Component } from "@angular/core";
import {FeedService} from "./hot-topic-feed/hot-topic-feed.service";

@Component({
    moduleId: module.id,
    selector: 'home-hot-topic',
    templateUrl: 'hot-topic.component.html',
    styleUrls: ['hot-topic.component.css']
})

export class HotTopicComponent {
    private feeds;
    constructor(private feedService: FeedService) {
        this.feeds = feedService.getUserFeeds();
    }
}
