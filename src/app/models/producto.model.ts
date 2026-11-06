export class Producto {
 constructor(
 public id: number,
 public nombre: string,
 public descripcion: string,
 public precio: number,
 public imagen: string,
 public disponibilidad: boolean // la tabla productos NO tiene este campo
 ) {}
}