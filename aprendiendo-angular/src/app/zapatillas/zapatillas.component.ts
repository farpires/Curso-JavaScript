import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import {ZapatillaService} from '../services/zapatilla.service';
  
@Component({
    selector:'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService],//a quie se carga todos los servicio que queramos cargar 
})

export class ZapatillasComponent implements OnInit{
    public title: string = "Componente de zapatilla";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];// public marcas: Array[string];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.color = 'red';
        this.marcas = new Array();
    }
    ngOnInit(){
        
        this.zapatillas = this._zapatillaService.getZapatilla();
        alert(this._zapatillaService.getTexto());
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
        alert(this.mi_marca);
    }
}
 /*public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;*/