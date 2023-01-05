import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-percent-item',
  templateUrl: './star-percent-item.component.html',
  styles: [
  ]
})
export class StarPercentItemComponent implements OnInit {
  @Input() max:number=0
  @Input() rate:number=0
  @Output() rateChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() readonly:boolean=false
  stars:number[]=[]
  constructor() { }

  ngOnInit(): void {
    this.rateChange.emit(this.rate);
    this.crearStars(this.max)
  
  }
  crearStars(max:number){
    for (let index = 0; index < max; index++) {
      this.stars.push(index);      
    }
  }
}
