import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicio/auth.service';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  nombre = '';
  email = '';
  clave = '';
  confirmarClave = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  registrar(): void {
    this.error = '';

    if (this.clave !== this.confirmarClave) {
      this.error = 'Las contraseñas no coinciden.';
      this.toast.error(this.error);
      return;
    }

    this.auth.registro({
      nombre: this.nombre,
      email: this.email,
      clave: this.clave
    }).subscribe({
      next: () => {
        this.toast.exito('¡Cuenta creada! Ya podés iniciar sesión.');
        this.router.navigate(['/inicio-sesion']);
      },
      error: (err) => {
        console.error('Error registro:', err);
        this.error = err.error?.error ?? 'No se pudo crear la cuenta.';
        this.toast.error(this.error);
      }
    });
  }
}