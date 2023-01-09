import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Header } from 'src/app/core/interfaces/header';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styles: [
  ]
})
export class CardTableComponent implements OnInit {
  @Input() headers:Header[]=[];
  @Input() body:any[]=[];
  @Output() DelegateEditar: EventEmitter<any> = new EventEmitter<any>();
  @Output() DelegateEliminar: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.headers,"headers");
    console.log(this.body,"body");
  }
  editar(data:any){
    this.DelegateEditar.emit(data);
  }
  eliminar(data:any){
    this.DelegateEliminar.emit(data);
  }
}
