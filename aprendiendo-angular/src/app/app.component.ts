import { Component } from '@angular/core';
import {Configuracion} from './models/configuracion';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public titulo = 'Master de Javascript';
  public descripcion: string;
  public mostrar_VideoJuegos : boolean = true;
  public config;
  constructor(){
    this.config = Configuracion;
    this.titulo = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }  

  ocultarVideojuego(value){
    this.mostrar_VideoJuegos = value;
  }
}
