import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { carrito } from '../../servicio/carrito';
import { CompraService } from '../../servicio/compra.service';
import { TicketService } from '../../servicio/ticket.service';
@Component({ selector: 'app-compra', templateUrl: './compra.html' })
export class Compra implements OnInit {
  items: any[] = []; error = '';
  constructor(private carrito: carrito, private compraService: CompraService, private ticketService: TicketService, private router: Router) {}
  ngOnInit(): void { this.carrito.ver().subscribe(lista => this.items = lista); }
  total(): number { return this.items.reduce((s, i) => s + Number(i.cantidad) * Number(i.precio_unitario), 0); }
  finalizar(): void {
    this.compraService.finalizar().subscribe({
      next: respuesta => this.ticketService.generar(respuesta.id_compra).subscribe({
        next: () => this.router.navigate(['/ticket', respuesta.id_compra]),
        error: () => this.error = 'La compra se registró, pero la API no pudo generar el PDF del ticket.'
      }), error: e => this.error = e.error?.error || 'No se pudo confirmar la compra.'
    });
  }
}
