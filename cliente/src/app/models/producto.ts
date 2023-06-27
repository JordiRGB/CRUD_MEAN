export class Empleados{
    _id?: number;
    nombre: string;
    apellido: string;
    fechaNa: String;
    puesto: string;
    salario: number;
    tel: number;

    constructor(nombre:string, apellido:string, fechaNa:String, puesto:string, salario:number, tel:number ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNa = fechaNa;
        this.puesto = puesto;
        this.salario = salario;
        this.tel=tel
    }
}
