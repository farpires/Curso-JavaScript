import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
  
@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public title: string = "Componente de zapatilla"
    public zapatillas: Array<Zapatilla>;

    constructor(){
    this.zapatillas=[
        new Zapatilla('rebook classic','Rebook','Azul', 1900 ,true),
        new Zapatilla('Nike runner','Nikee','Negras', 1500 ,true),
        new Zapatilla('rebook classic','Rebook ','Blanco', 1900 ,true),
        new Zapatilla('Adidas Yezzy','Adidas','Gris', 1900 ,false),
        new Zapatilla('Adidas runner','Adidas','Azul', 1900 ,false),
    ];

    }
    ngOnInit(){
        console.log(this.zapatillas);
    }
}
 /*public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;*/