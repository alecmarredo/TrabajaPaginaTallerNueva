export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number | string;
  imagen: string;
  categoria?: string;
  en_oferta?: number | string | boolean;
  precio_oferta?: number | string | null;
}