import { Component } from '@angular/core';


@Component({
    //nombre de la etiqueta o nombre del componente
    selector: 'videojuego', 
   //una plantilla en linea
    template: `
    <h2> Componente de Video Juegos <h2>
    <ul>
    <li>GTA</li>
    <li>Prince of Persia</li>
    <li>Teken</li> 
    <li>Mario</li>
    </ul>
    ` 
})
export class VideojuegoComponent {
      constructor(){
          console.log('se ha cargado el compnent: videojuego.componnetn.ts');
      }
}