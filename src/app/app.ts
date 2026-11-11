import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './compartidos/nav/nav';
import { Footer } from './compartidos/footer/footer';
import { Toast } from './componentes/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, Toast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoAlec');
}
