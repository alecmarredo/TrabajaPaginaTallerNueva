import { Injectable, signal } from '@angular/core';

export interface ToastMensaje {
  id: number;
  mensaje: string;
  tipo: 'exito' | 'error' | 'info';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts = signal<ToastMensaje[]>([]);
  private contador = 0;

  mostrar(mensaje: string, tipo: ToastMensaje['tipo'] = 'info', duracion = 3500): void {
    const id = ++this.contador;
    this.toasts.update(lista => [...lista, { id, mensaje, tipo }]);
    setTimeout(() => this.cerrar(id), duracion);
  }

  exito(mensaje: string): void {
    this.mostrar(mensaje, 'exito');
  }

  error(mensaje: string): void {
    this.mostrar(mensaje, 'error');
  }

  cerrar(id: number): void {
    this.toasts.update(lista => lista.filter(t => t.id !== id));
  }
}