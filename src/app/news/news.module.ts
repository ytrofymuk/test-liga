import { NgModule } from '@angular/core';

import { NewsWrapperComponent } from './news-wrapper.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [
    NewsWrapperComponent
  ],
  imports: [
    NewsRoutingModule
  ],
  providers: [],
})
export class NewsModule { }
