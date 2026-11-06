export interface Indumentaria {
    id: number;
    titulo: string;
    categoria: string;
    descripcion: string;
    descripcion2: string;
    img: string;
    alt: string;
    precio: number;
    enOferta?: boolean;
    precioOferta?: number;
} 