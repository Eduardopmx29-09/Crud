import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/Models/CitaModelo';
import { DateServiceService } from 'src/app/services/date-service.service';



@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.css']
})
export class FormDateComponent implements OnInit {
  imgAvatar:string;
  imgCar1:string;
  imgCar2:string;
  imgCar3:string;
  formDate:FormGroup
  titulo:string;
  id:string| null;



  constructor(private fb:FormBuilder,
              private router:Router,
              private toastr: ToastrService,
              private citaService:DateServiceService,
              private aRouter:ActivatedRoute, ) {
    this.id=this.aRouter.snapshot.paramMap.get('id');
    this.imgAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU"
    this.imgCar1="https://kinsta.com/es/wp-content/uploads/sites/8/2019/10/borrar-tema-wordpress.png"
    this.imgCar2="https://kinsta.com/es/wp-content/uploads/sites/8/2019/07/tema-de-wordpress-1024x512.png"
    this.imgCar3="https://kinsta.com/es/wp-content/uploads/sites/8/2018/05/err_too_many_redirects.png"
    this.titulo="Agendar Cita";

    this.formDate =this.fb.group({

      titulo:['',Validators.required],
      descripcion:['',Validators.required],
      entrada:['',Validators.required],
      salida:['',Validators.required],
      color:['',Validators.required],


    })
  }

  ngOnInit(): void {
    this.EditarCita;
  }

  dateSubmit(){

    const CITA:Cita={
      titulo:this.formDate.get('titulo')?.value,
      descripcion:this.formDate.get('descripcion')?.value,
      entrada:this.formDate.get('entrada')?.value,
      salida:this.formDate.get('salida')?.value,
      color:this.formDate.get('color')?.value,

    }
      if(this.id!== null  ){
        ///editar
        this.citaService.editarCita(this.id,CITA).subscribe(data =>{
          this.toastr.info('Cita Actualizada', 'cita Actualizada');
          this.router.navigate(["/lista"])
        },error=>{
          console.log(error)
          this.formDate.reset()
          this.toastr.error('error inesperadp', 'error inesperado');
        })
      }else{
        //agregamos
        this.citaService.guardarCita(CITA).subscribe(data=>{
          this.toastr.success('Cita agregada', 'cita agregada');
          this.router.navigate(["/lista"])
        },error=>{
          console.log(error)
          this.formDate.reset()
          this.toastr.error('error inesperadp', 'error inesperado');
        })
      }
  }
  EditarCita(){
    if(this.id !==null){
      this.titulo='Editar cita';
      this.citaService.BuscaCita(this.id).subscribe(data=>{
        this.formDate.setValue({
          titulo:data.titulo,
          descripcion:data.descripcion,
          entrada:data.entrada,
          salida:data.salida,
          color:data.color
        })
      })
    }
  }
}
