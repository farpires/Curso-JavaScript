import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public titulo = 'Master de Javascript';
  public mostrar_VideoJuegos : boolean = true;

  ocultarVideojuego(value){
    this.mostrar_VideoJuegos = value;
  }
}
