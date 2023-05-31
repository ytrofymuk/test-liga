import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from './news.service';
import { INews } from './news-models/news.model';

@Component({
  selector: 'app-news-wrapper',
  templateUrl: './news-wrapper.component.html',
  styleUrls: ['./news-wrapper.component.css']
})
export class NewsWrapperComponent implements OnInit {

  public news: INews[] = [];
  public modalDescription: string | null = null;

  private newsService = inject(NewsService);

  public isModalOpened = false;

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    })
  }

  onShowDescription(post: INews) {
    this.modalDescription = post.description;
    this.isModalOpened = true;
  }

  onModalClosed() {
    this.isModalOpened = false;
  }

}
