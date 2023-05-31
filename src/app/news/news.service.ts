import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INews } from './news-models/news.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class NewsService {

  private http = inject(HttpClient);

  getNews(): Observable<INews[]> {
    return this.http.get('../../assets/news.json').pipe(
      map(news => <INews[]>news)
    )
  }

  getPostById(postId: string): Observable<INews> {
    return this.http.get('../../assets/news.json').pipe(
      map(news => {
        const post: INews | undefined = (news as INews[]).find((posts: INews) => posts.ID === postId);
        return <INews>post;
      })
    )
  }

}
