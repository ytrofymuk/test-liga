import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from './news.service';
import { INews } from './news-models/news.model';

@Component({
  selector: 'app-news-wrapper',
  templateUrl: './news-wrapper.component.html',
  styleUrls: ['./news-wrapper.component.css']
})
export class NewsWrapperComponent implements OnInit {

  news: INews[] = [];

  private newsService = inject(NewsService);

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    })
  }

}
