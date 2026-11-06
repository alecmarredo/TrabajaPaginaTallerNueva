import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompraService } from '../../servicio/compra.service';
@Component({ selector: 'app-compras', standalone: true, imports: [RouterLink], templateUrl: './compras.html', styleUrls: ['./compras.css'] })
export class Compras implements OnInit {
  compras: any[] = [];
  constructor(private compraService: CompraService) {}
  ngOnInit(): void { this.compraService.historial().subscribe(lista => this.compras = lista); }
}
