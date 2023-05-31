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

  public isDescriptionShown = false;
  public topCords!: string;
  public leftCords!: string;

  showDescription(e: PointerEvent | MouseEvent) {
    this.isDescriptionShown = true;
    this.topCords = e.offsetY + 'px';
    this.leftCords = e.offsetX + 'px';
  }

  closeModal() {
    this.modalClosed.emit();
    this.isDescriptionShown = false;
  }
}
