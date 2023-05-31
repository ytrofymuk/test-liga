import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-wrapper',
  template: `<h1>Test</h1>`,
  styles: [`
    h1 {
      height: 100px;
    }
  `]
})
export class NewsWrapperComponent implements OnInit {

  ngOnInit(): void {
    console.log('init')
  }

}
