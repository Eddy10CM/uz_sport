import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardMember } from 'src/app/core/class/card-member';

@Component({
  selector: 'app-card-member',
  templateUrl: './card-member.component.html',
  styles: ['']
})
export class CardMemberComponent implements OnInit {
  
  @Input() cardMember: CardMember = new CardMember();
  @Output() delegeteClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goPage(route: string) {
    this.delegeteClick.emit(route);
  }

}
