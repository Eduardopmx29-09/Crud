
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/Models/CitaModelo';
import { DateServiceService } from 'src/app/services/date-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  arrCita:Cita[];
  imgAvatar:string;
  //arrFecha:Cita[];





  constructor(private citaService:DateServiceService,
              private toastr:ToastrService,
              private aRouter:ActivatedRoute) {
    this.arrCita=[]
    this.imgAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU"
    //this.arrFecha=[]

  }

  ngOnInit(): void {
    this.obtenerCita()

  }



  obtenerCita(){
    this.citaService.getCita().subscribe(data =>{
      this.arrCita=data
    },error =>{
      console.log(error)
    })
  }

  elimimnarCita(id:any){
    this.citaService.eliminarCita(id).subscribe(data =>{
      this.toastr.error('la cita fue eliminada con exito' , 'cita eliminada');
      this.obtenerCita();
    },error =>{
      console.log(error)
    })
  }

  /* fecha(){
    for(let fecha of this.arrCita){
      let p1= fecha.entrada
      let p2=fecha.salida

      let p3 =p1.getTime()-p2.getTime()

      let calculo=Math.round(p3/(1000*60*60*24))
      console.log(calculo)
    }

  }*/

}
