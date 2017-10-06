import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: [ './stars.component.scss' ]
})
export class StarsComponent implements OnInit {
  @Input() rating: number;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  stars: boolean[];
  @Input() readonly: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(this.rating < i);
    }
  }

  clickStar(i: number) {
    if (!this.readonly) {
      this.rating = i + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }
}
