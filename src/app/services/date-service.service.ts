import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cita } from '../Models/CitaModelo';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {
  url:string;


  constructor(private http:HttpClient) {
    this.url="http://localhost:4000/api/citas/";

  }

  getCita():Observable<any>{
    return this.http.get(this.url);
  }

  eliminarCita(id:string):Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarCita(cita:Cita):Observable<any>{
    return this.http.post(this.url,cita)
  }

  BuscaCita(id:string):Observable<any>{
    return this.http.get(this.url + id)
  }
  editarCita(id:string,cita:Cita):Observable<any>{
    return this.http.put(this.url + id,cita);
  }
}
