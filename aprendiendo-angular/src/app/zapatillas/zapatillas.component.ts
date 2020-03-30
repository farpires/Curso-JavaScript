import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
  
@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public title: string = "Componente de zapatilla";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    // public marcas: Array[string];
    public color: string;
    public mi_marca: string;

    constructor(){
        this.color = 'red';
        this.marcas = new Array();
        this.zapatillas=[
        new Zapatilla('rebook classic','Rebook','Azul', 1400 ,true),
        new Zapatilla('Nike runner','Nikee','Negras', 1500 ,true),
        new Zapatilla('rebook classic','Rebook','Blanco', 1900 ,true),
        new Zapatilla('Adidas Yezzy','Adidas','Gris', 1900 ,false),
        new Zapatilla('Adidas runner','Adidas','Azul', 1900 ,false),
    ];

    }
    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }
    getMarcas(){
         this.zapatillas.forEach((zapatilla, index)=>{
               if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
               } 
                
         });
         console.log(this.marcas)
    }
    getMarca(){
        alert(this.mi_marca);
    }
    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    borrarMarca(index){
        // delete this.marcas[index];
        this.marcas.splice(index,1);
    }
    onBlur(){
        console.log(" a salido del input");
    }
    mostrarPalabra(){
        console.log(this.mi_marca);
    }
}
 /*public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;*/