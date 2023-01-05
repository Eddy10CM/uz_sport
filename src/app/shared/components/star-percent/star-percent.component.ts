import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-percent',
  templateUrl: './star-percent.component.html',
  styles:[
    
    `
    ngb-rating {
      color: #FFC107;
      font-size: 80px;
    }
    `

  ]
})
export class StarPercentComponent implements OnInit {
  starRating:number=5
  constructor() { }

  ngOnInit(): void {
  }

}
