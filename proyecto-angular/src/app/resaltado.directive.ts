import { Directive, ElementRef } from '@angular/core';
//ElementRef // lo que hace es que cuanod yo selecionon un elemento cuanod yo le aplicao directiva a un elemento , me consigue el ojeto natvo 

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {

   }
   ngOnInit(){
    var element = this.el.nativeElement;
        element.style.background = "rgba(53, 103, 164, 0.8)" ;
        element.style.padding = "25px";
        element.style.marginTop= "15px";
        element.style.color="white";
        

        // element.innerText = element.innerText.toUpperCase().replace("DE CONTACTO","PARA CONTACTARME");
   }

}
