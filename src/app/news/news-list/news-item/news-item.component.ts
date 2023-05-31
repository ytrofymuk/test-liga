import { Component, Input } from '@angular/core';
import { INews } from '../../news-models/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {

  @Input()
  newPost!: INews;

  get itemLink() {
    return String(this.newPost.ID);
  }
}
