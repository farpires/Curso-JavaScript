import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;
// import { Global } from '../../services/global';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widhtSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor:any;
  // public nombredesdeHijo:string;
  // public correodesdeHijo:string;
  @ViewChild('textos')textos;
  // public url: string;
  

  constructor() { 
    this.captions = true;
    // this.url = Global.url;
  }

  ngOnInit(): void {
      var opcion_clasica = document.querySelector('#texto').innerHTML;
      // console.log(this.textos);
  }
  cargarSlider(){

    this.anchuraToSlider = this.widhtSlider; 
  }
  resetearSlider(){
    this.anchuraToSlider = false;  
  }
  getAutor(event){
      this.autor = event;
      // this.nombredesdeHijo = this.autor.name;
      // this.correodesdeHijo = this.autor.correo;
  }

}
