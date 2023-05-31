import { Component, Input } from '@angular/core';
import { INews } from '../news-models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {

  @Input()
  news!: INews[];

  trackPost(index: number , post: INews) {
    return post.ID;
  }
}
