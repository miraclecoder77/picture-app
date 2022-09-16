import { Directive, Input, Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[appPagination]',
  exportAs: 'pagination'
})
export class PaginationDirective {
  @Input() totalPages: number;

  pageNo: number = 1;
  
  @Output() pageNoEmitter = new EventEmitter();

  constructor() { }

  onNext() {
      this.setPage(Math.min(this.totalPages, this.pageNo + 1));
  }
  onPrev() {
      this.setPage(Math.max(1, this.pageNo - 1));
  }
  onFirst() {
    this.setPage(1)
  }
  onLast() {
    this.setPage(this.totalPages);
  }

  setPage(pageno) {
    this.pageNo = pageno;
    this.pageNoEmitter.emit(pageno);
    // console.log(this.pageNo)
  }
}
