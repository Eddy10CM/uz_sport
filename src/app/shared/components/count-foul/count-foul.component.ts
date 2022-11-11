import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Foul } from 'src/app/core/class/foul';

@Component({
  selector: 'app-count-foul',
  templateUrl: './count-foul.component.html',
  styles: [
  ]
})
export class CountFoulComponent implements OnChanges {

  @Input() foul: Foul = new Foul();

  checked = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.foul)
    this.checked = this.foul.Foul;
  }

  

}
