import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INews } from '../news-models/news.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.css']
})
export class NewsSliderComponent {

  @Input()
  sliderNews!: INews[];

  @Output()
  postClicked = new EventEmitter();

  currentSlide!: INews;

  constructor(sliderConfig: NgbCarouselConfig) {
    sliderConfig.interval = 5000;
  }

  onSlid(slideEvent: any) {
    const index = +slideEvent.current.at(-1)
    this.currentSlide = this.sliderNews[index];
  }

  readPost() {
    if (this.currentSlide) {
      this.postClicked.emit(this.currentSlide);
    } else {
      this.postClicked.emit(this.sliderNews[0]);
    }
  }

  trackPost(index: number, post: INews) {
    return post.ID;
  }

}
