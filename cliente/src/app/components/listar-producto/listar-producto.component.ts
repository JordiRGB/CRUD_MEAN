import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Empleados } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
  animations: [
    trigger('aparecerDesdeArriba', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', animate('500ms ease-in')),
    ])
  ]
})
export class ListarProductoComponent {
  listarEmpleados: Empleados[] = [];
  mostrarCard: boolean = false;



  constructor(private productoService: ProductoService, private toastr:ToastrService){}
  
  ngOnInit():void{
    this.obtenerEmpleados();
    this.mostrarCard = true;
  }

  obtenerEmpleados(){
    this.productoService.getEmpleados().subscribe(data => {
      console.log(data);
      this.listarEmpleados = data;
    },error => {
      console.log(error);
    })
  }

  confirmar(listarEmpleados: Empleados){
    const respuesta = confirm(`¿Esta seguro de borrar el empleado`);
    if(respuesta == true){
      this.eliminarEmpleado(listarEmpleados._id)
    }else{
      console.log("CANCELADO");
    }
  }
  eliminarEmpleado(id:any){
    this.productoService.eliminarEmpleado(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito', 'Producto eliminado')
      this.obtenerEmpleados();
    }, error =>{
      console.log(error);
    })
  }
}
