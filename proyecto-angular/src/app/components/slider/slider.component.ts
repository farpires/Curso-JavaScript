import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;
  @Input('etiquetas') captions: boolean;
  @Output() conseguirAutor= new EventEmitter();//aqui generamos un nuevo evento

  public autor:{};

  constructor() { 

    this.autor={
      name: "Fabio Arpires",
      correo: "arpirez.fabio@gmail.com",
      cel: "3834912105",
    };

  }

  ngOnInit(): void {
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background","green")
                  .css("height","50px");
    });
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
    //lanzar el evento
    // this.conseguirAutor.emit(this.autor);
  }
  //par pasar desd eel componente hijo al padre tenermos que acer un evento
  lanzar(event){

    this.conseguirAutor.emit(this.autor);
  }

}
