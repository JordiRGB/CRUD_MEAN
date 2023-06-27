import { Component, AfterViewInit, HostListener  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleados } from 'src/app/models/producto';
import { ProductoService } from '../../services/producto.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  animations: [
    trigger('aparecerDesdeArriba', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', animate('500ms ease-in')),
    ])
  ]
})    
export class CrearProductoComponent {
  empleadoForm: FormGroup;
  titulo = 'Crear empleado';
  id: string | null;
  mostrarCard: boolean = false;


  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private productoService: ProductoService, private aRoute: ActivatedRoute){
    this.empleadoForm = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      fechaNa:['', Validators.required],
      puesto:['', Validators.required],
      salario:['', Validators.required],
      tel:['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.esEditar();
    this.mostrarCard = true;

  }

  agregarEmpleado(){
    const EMPLEADOS: Empleados = {
      nombre: this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      fechaNa: this.empleadoForm.get('fechaNa')?.value,
      puesto: this.empleadoForm.get('puesto')?.value,  
      salario: this.empleadoForm.get('salario')?.value, 
      tel: this.empleadoForm.get('tel')?.value
    }
    console.log(EMPLEADOS);
    console.log(this.id);

    if(this.id !== null){
      //editar
      this.productoService.editarEmpleado(this.id, EMPLEADOS).subscribe(data =>{
        this.toastr.success('La informacion del empleado se actualizo con exito! ', 'Empleado actualizado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.empleadoForm.reset();
      })
    }else{
      //agregar
      this.productoService.guardarEmpleado(EMPLEADOS).subscribe(data => {
        console.log("siono");
        this.toastr.success('El empleado se registro con exito! ', 'Empleado registrado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.empleadoForm.reset();
      })
    }
  } 
  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Empleado'
      this.productoService.obtenerEmpleado(this.id).subscribe(data => {
        this.empleadoForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          fechaNa: data.fechaNa,
          puesto: data.puesto,
          salario: data.salario,
          tel: data.tel, 
        })
      })
    }
  }
}
