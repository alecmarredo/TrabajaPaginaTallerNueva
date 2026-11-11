import { Component, inject } from '@angular/core';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast-contenedor">
      @for (t of toastService.toasts(); track t.id) {
        <div class="toast" [class.exito]="t.tipo === 'exito'" [class.error]="t.tipo === 'error'" [class.info]="t.tipo === 'info'" (click)="toastService.cerrar(t.id)">
          <span class="icono">{{ t.tipo === 'exito' ? '✓' : t.tipo === 'error' ? '✕' : 'i' }}</span>
          <span class="texto">{{ t.mensaje }}</span>
        </div>
      }
    </div>
  `,
  styles: `
    .toast-contenedor {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .toast {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 260px;
      max-width: 360px;
      padding: 14px 18px;
      background: #1a1a1a;
      color: #fff;
      border: 1px solid #ffd700;
      border-left-width: 5px;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
      animation: entrar 0.3s ease;
    }
    .toast.exito { border-color: #ffd700; }
    .toast.error { border-color: #ff4d4d; }
    .toast.info  { border-color: #4da6ff; }
    .icono {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-weight: bold;
      background: #ffd700;
      color: #000;
      flex-shrink: 0;
    }
    .toast.error .icono { background: #ff4d4d; color: #fff; }
    .toast.info .icono  { background: #4da6ff; color: #fff; }
    @keyframes entrar {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
  `
})
export class Toast {
  toastService = inject(ToastService);
}