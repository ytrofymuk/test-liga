import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsWrapperComponent } from './news-wrapper.component';
import { NewsItemViewComponent } from './news-list/news-item-view/news-item-view.component';



const paths: Routes = [
  {
    path: '',
    component: NewsWrapperComponent
  },
  {
    path: ':postId',
    component: NewsItemViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(paths)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutingModule { }
