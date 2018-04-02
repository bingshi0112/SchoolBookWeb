/**
 * Created by bing on 12/7/16.
 */
import { Component, Input, OnInit, Injectable } from "@angular/core";
import {Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
@Component({
    moduleId: module.id,
    selector: 'hot-topic-feed',
    templateUrl: 'hot-topic-feed.component.html',
    styleUrls: ['hot-topic-feed.component.css']
})

export class HotTopicFeedComponent implements OnInit {
    @Input() url: string;
    data;

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.http.get('http://demos.angular-craft.com/rss_service.php?url=' + this.url).map(res => res.json()).subscribe(res => {
                this.data = res.responseData.feed;
                console.log(res);
            });
    }


}

