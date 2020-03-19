import { Component } from '@angular/core';


@Component({
    //nombre de la etiqueta o nombre del componente
    selector: 'videojuego', 
   //una plantilla en linea
    // template: ` `
    templateUrl:'./videojuego.component.html' 
})
export class VideojuegoComponent {
    
    public titulo: string;//propiedades
    public listado: string;

      constructor(){//se le da valor a alas propiedades
          this.titulo = 'Componentde de Video Juegos2';
          this.listado= 'Listadod e los juegos mas populares2020';
          console.log('se ha cargado el compnent: videojuego.componnetn.ts');
      }
}