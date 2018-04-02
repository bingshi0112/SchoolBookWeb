/**
 * Created by bing on 12/7/16.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class FeedService {
    private feeds =  [
        "http://rss.cnn.com/rss/cnn_topstories.rss",
        "http://www.ed.gov/feed",
        "https://www.ted.com/themes/rss/id/6"
    ];

    getUserFeeds() {
        return this.feeds
    }
}