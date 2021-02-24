export class Cita{
      _id?:number;
      titulo:string
      descripcion:string;
      entrada:Date;
      salida:Date;
      color:string;

  constructor(pTitulo:string,pDescripcion:string,pEntrada:Date,pSalida:Date,pColor:string){

    this.titulo=pTitulo;
    this.descripcion=pDescripcion
    this.entrada=pEntrada
    this.salida= pSalida;
    this.color=pColor;
  }
}
