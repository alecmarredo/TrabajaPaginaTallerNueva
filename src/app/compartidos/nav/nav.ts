import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../servicio/auth.service';
@Component({ selector: 'app-nav', imports: [RouterLink], templateUrl: './nav.html', styleUrl: './nav.css' })
export class Nav {
  constructor(public auth: AuthService, private router: Router) {}
  salir(): void { this.auth.logout(); this.router.navigate(['/']); }
}
