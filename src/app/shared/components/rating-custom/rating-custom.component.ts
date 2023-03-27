import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-custom',
  templateUrl: './rating-custom.component.html',
  styles: [
  ]
})
export class RatingCustomComponent implements OnInit {
  @Input() numberRating:number=0
  @Input() max:number=5
  constructor() { }

  ngOnInit(): void {
  }

}
