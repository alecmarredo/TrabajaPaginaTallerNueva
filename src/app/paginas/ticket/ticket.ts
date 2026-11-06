import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../servicio/ticket.service';
@Component({ selector: 'app-ticket', templateUrl: './ticket.html' })
export class Ticket implements OnInit {
  ticket: any = null; urlPdf = ''; error = '';
  constructor(private ruta: ActivatedRoute, private service: TicketService) {}
  ngOnInit(): void {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));
    this.service.ver(id).subscribe({ next: t => { this.ticket = t; this.urlPdf = this.service.baseArchivos + t.pdf_path; }, error: () => this.error = 'No se encontró el ticket.' });
  }
}
