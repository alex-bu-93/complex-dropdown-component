import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagerInterface }                         from '@shared/interfaces';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() pager: PagerInterface;
  @Output() pageToNavigate: EventEmitter<boolean> = new EventEmitter();

  fetchData(page) {
    this.pageToNavigate.emit(page);
  }

}
