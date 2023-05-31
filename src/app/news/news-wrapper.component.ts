import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from './news.service';
import { INews } from './news-models/news.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-wrapper',
  templateUrl: './news-wrapper.component.html',
  styleUrls: ['./news-wrapper.component.css']
})
export class NewsWrapperComponent implements OnInit {

  public news: INews[] = [];
  public sliderNews: INews[] = [];
  public modalDescription: string | null = null;

  private newsService = inject(NewsService);
  private router = inject(Router);

  public isModalOpened = false;

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      this.sliderNews = news.splice(0, 3);
    })
  }

  onShowDescription(post: INews): void {
    this.modalDescription = post.description;
    this.isModalOpened = true;
  }

  onModalClosed():void {
    this.isModalOpened = false;
  }

  onPostClicked(post: INews): void {
    this.router.navigate([`/news/${post.ID}`])
  }

  onPostCreated(post: INews): void {

    // dummy data instead of sending it to server
    post.ID = new Date().toISOString();
    post.date = new Date();
    post.link = '';
    post.isTop = false;
    post.image = '';
    post.imageSmall = '';
    post.imageSource = '';
    post.commentsCount = 0;
    post.viewCount = 0;
    this.news.unshift(post)
  }
}
