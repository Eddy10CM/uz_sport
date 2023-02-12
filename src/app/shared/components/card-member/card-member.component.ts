import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardMember } from 'src/app/core/class/card-member';

@Component({
  selector: 'app-card-member',
  templateUrl: './card-member.component.html',
  styles: ['']
})
export class CardMemberComponent implements OnInit {
  
  @Input() cardMember: CardMember = new CardMember();
  @Output() delegeteClick: EventEmitter<CardMember> = new EventEmitter<CardMember>();

  constructor() { }

  ngOnInit(): void {
  }

  goPage(route: CardMember) {
    this.delegeteClick.emit(route);
  }

}
