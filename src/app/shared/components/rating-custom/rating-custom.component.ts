import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-custom',
  templateUrl: './rating-custom.component.html',
  styles: [
  ]
})
export class RatingCustomComponent implements OnInit {
  numberRating:number=0
  constructor() { }

  ngOnInit(): void {
  }

}
