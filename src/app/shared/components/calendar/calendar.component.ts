import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
export interface Dias{
  text:string;
  fecha:string;
  select:boolean;
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styles: [
  ]
})
export class CalendarComponent implements OnInit {
  @Input() visible:boolean=false;
  @Output() DelegateFecha: EventEmitter<any> = new EventEmitter<any>();

  dia:moment.Moment=moment();
  hoy:string=moment().format('YYYY-MM-DD');
  desde!:moment.Moment;
  hasta!:moment.Moment;
  dias:Dias[]=[];
  mes:string='';
  anio:string='';
  meses:string[]=[
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
  ];
  nombresdiasmin:string[]=[
    "Lu",
    "Ma",
    "Mi",
    "Ju",
    "Vi",
    "Sa",
    "Do"
  ];
  anios:number[]=[]
  mesesV:string[]=[]
  anioIndice:number=moment().year()
  indice!:moment.Moment
  diaseleccionado:string="";
  constructor() { }
  tresAnios(pivote:string){
    console.log(pivote)
  }
  ngOnInit(): void {
    this.mes= this.meses[Number(this.dia.format("M"))-1];
    this.anio=this.dia.format("YYYY");
    this.desde=moment().startOf('month').startOf("isoWeek");
    this.hasta=moment().endOf('month').endOf("isoWeek");
    let indice = moment(this.desde,"YYYY-MM-DD");
    console.log(this.desde.format('YYYY-MM-DD') , this.hasta.format('YYYY-MM-DD'));
    let diff = Math.abs(this.desde.diff(this.hasta,"days"));
    console.log(diff)
    for (let index = 0; index <= diff; index++) {
      this.dias.push({
        text:indice.format("DD"),
        fecha:indice.format("YYYY-MM-DD"),
        select:false
      });
      indice = indice.add(1,"days");      
    }
    this.DelegateFecha.emit(moment().format("YYYY-MM-DD"));
    // while(this.desde.format('YYYY-MM-DD') != this.hasta.format('YYYY-MM-DD')){
    //   this.dias.push({
    //     text:indice.format("DD"),
    //     fecha:indice.format("YYYY-MM-DD")
    //   });
    //   indice = indice.add(1,"days");
    // }
    console.log(this.dias,"this.dias");
  }
  cambiarDia(dia:Dias){
    dia.select=true;
    this.dias.map(d=>{
      d.select=false;
      if(dia.fecha == d.fecha) d.select=true;
      return d;
    });
    this.diaseleccionado=dia.fecha;
  }

  seleccionarAnioV2(anio:number | string){
    this.anio=anio.toString()
    this.anios=[]
    this.nombresdiasmin=[
      "Lu",
      "Ma",
      "Mi",
      "Ju",
      "Vi",
      "Sa",
      "Do"
    ]
    this.cambiarMes(moment(anio,"YYYY"));

  } 
  seleccionarMesV2(mes:string){
    this.mesesV=[]
    this.anios=[]
    this.dias=[];
    this.nombresdiasmin=[]
    this.mesesV=[...this.meses]
    console.log(mes,this.anioIndice)
  } 
  seleccionarAnio(anio:number | string){
    this.anios=[]
    this.dias=[];
    this.nombresdiasmin=[]
    this.indice = moment(this.anioIndice,"YYYY").subtract(4,"years");
    while(this.indice.isSameOrBefore(moment(this.anioIndice,"YYYY").add(4,"years"))){
      console.log(this.indice.year());
      this.anios.push(this.indice.year())
      this.indice.add(1,"year")
    }
    console.log(anio,this.anioIndice)
  } 
  seleccionarMes(mes:string){
    this.mesesV=[]
    this.anios=[]
    this.dias=[];
    this.nombresdiasmin=[]
    this.mesesV=[...this.meses]
    console.log(mes,this.anioIndice)
  } 
  ok(){
    this.visible=false;
    this.DelegateFecha.emit(this.diaseleccionado);
  }
  cancel(){
    this.visible=false;
  }
  cambiarMes(mes:moment.Moment){
    this.dias=[];
    this.dia = mes;
    this.mes= this.meses[Number(this.dia.format("M"))-1];
    this.anio=this.dia.format("YYYY");
    this.desde=moment(mes.format("YYYY-MM-DD"),"YYYY-MM-DD").startOf('month').startOf("isoWeek");
    this.hasta=moment(mes.format("YYYY-MM-DD"),"YYYY-MM-DD").endOf('month').endOf("isoWeek");
    let indice = moment(this.desde,"YYYY-MM-DD");
    console.log(this.desde.format('YYYY-MM-DD') , this.hasta.format('YYYY-MM-DD'));
    let diff = Math.abs(this.desde.diff(this.hasta,"days"));
    console.log(diff)
    for (let index = 0; index <= diff; index++) {
      this.dias.push({
        text:indice.format("DD"),
        fecha:indice.format("YYYY-MM-DD"),
        select:false
      });
      indice = indice.add(1,"days");      
    }
    console.log(this.dias,"this.dias");
  }
  unMes(arrow:string){
    let momentDate = this.dia.add(arrow=="atras"?-1:1,"month");
    console.log(this.dia.format("YYYY-MM-DD"),"this.dia")
    this.cambiarMes(momentDate);
  }
  esHoy(fecha:string):boolean{
    return fecha === this.hoy;
  }

}
