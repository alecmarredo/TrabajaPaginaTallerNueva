import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicio/auth.service';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-inicio-sesion',
  imports: [FormsModule, RouterLink],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css'
})
export class InicioSesion {
  email = '';
  clave = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastService
  ) {}

  ingresar(): void {
    this.error = '';

    this.auth.login(this.email, this.clave).subscribe({
      next: (res) => {
        this.toast.exito(`¡Bienvenido, ${res.usuario?.nombre ?? ''}!`);
        this.router.navigate([this.auth.esAdmin() ? '/admin' : '/inicio']);
      },
      error: (err) => {
        this.error = err.status === 401
          ? 'Email o contraseña incorrectos.'
          : 'No se pudo conectar con el servidor.';
        this.toast.error(this.error);
      }
    });
  }
}