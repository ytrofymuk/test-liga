import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INews } from '../news-models/news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {

  @Input()
  news!: INews[];

  @Output()
  showDescription = new EventEmitter();

  trackPost(index: number , post: INews) {
    return post.ID;
  }

  itemClick(post: INews) {
    this.showDescription.emit(post);
  }
}
