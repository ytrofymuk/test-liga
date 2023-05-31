import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsWrapperComponent } from './news-wrapper.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsService } from './news.service';
import { NewsItemComponent } from './news-list/news-item/news-item.component';
import { RouterModule } from '@angular/router';
import { NewsItemViewComponent } from './news-list/news-item-view/news-item-view.component';
import { NewsModalComponent } from './news-modal/news-modal.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsWrapperComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsItemViewComponent,
    NewsModalComponent,
    NewsSliderComponent,
    NewsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NewsRoutingModule,
    NgbCarouselModule,
    ReactiveFormsModule
  ],
  providers: [
    NewsService
  ],
})
export class NewsModule { }
