import { Component, OnInit, DoCheck, OnDestroy  } from '@angular/core';


@Component({
    //nombre de la etiqueta o nombre del componente
    selector: 'videojuego', 
    templateUrl:'./videojuego.component.html' 
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    
    public titulo: string;//propiedades
    public listado: string;

      constructor(){//se le da valor a alas propiedades
          this.titulo = 'Componentde de Video Juegos2';
          this.listado= 'Listadod e los juegos mas populares2020';
        //   console.log('se ha cargado el compnent: videojuego.componnetn.ts');
      }
   
  
    ngOnInit(){
    //  console.log("OnInit Ejecutado");
    }
    ngDoCheck(){
        // console.log("Docheck Ejecutado");
    }
    ngOnDestroy(){
        // console.log("OnDestroy Ejecutado");//se ejecuta antes de eleimnina 
    }
    CambiarTitulo(){
        // this.titulo = "Nuevo titulo del componente ";

    }
  
    
}