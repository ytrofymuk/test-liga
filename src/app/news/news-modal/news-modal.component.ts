import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.css']
})
export class NewsModalComponent {

  @Input()
  description!: string | null;

  @Output()
  modalClosed = new EventEmitter();

  closeModal() {
    this.modalClosed.emit();
  }
}
