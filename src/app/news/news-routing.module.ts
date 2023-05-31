import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsWrapperComponent } from './news-wrapper.component';



const paths: Routes = [
  {
    path: '',
    component: NewsWrapperComponent
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
