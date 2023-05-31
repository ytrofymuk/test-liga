import { Component, Input, OnInit, inject } from '@angular/core';
import { INews } from '../../news-models/news.model';
import { NewsService } from '../../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-item-view',
  templateUrl: './news-item-view.component.html',
  styleUrls: ['./news-item-view.component.css']
})
export class NewsItemViewComponent implements OnInit {

  public post!: INews;
  public postId!: string;

  private newsService = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params['postId'];
    })
    if (this.postId) {
      this.newsService.getPostById(this.postId).subscribe(post => {
        this.post = post;
      })
    }
  }

}
