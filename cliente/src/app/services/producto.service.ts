import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleados } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/';
  constructor(private http:HttpClient) { }

  getEmpleados(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarEmpleado(id: string): Observable<any>{
    return this.http.delete(this.url + id)  ; 
  }

  guardarEmpleado(producto: Empleados): Observable<any>{
    return this.http.post(this.url, producto);
  }

  obtenerEmpleado(id:string):Observable<any>{
    return this.http.get(this.url + id);
  }

  editarEmpleado(id: string, producto:Empleados):Observable<any>{
    return this.http.put(this.url + id, producto);
  }
}

