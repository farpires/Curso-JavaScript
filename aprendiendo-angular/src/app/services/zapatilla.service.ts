//1 objeto inyectable
import { Injectable } from '@angular/core';//es un decorador 
import { Zapatilla } from '../models/zapatilla';


@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla('rebook classic','Rebook','Azul', 1400 ,true),
            new Zapatilla('Nike runner','Nikee','Negras', 1500 ,true),
            new Zapatilla('rebook classic','Rebook','Blanco', 1900 ,true),
            new Zapatilla('Adidas Yezzy','Adidas','Gris', 1900 ,false),
            new Zapatilla('Adidas runner','Adidas','Azul', 1900 ,false),
        ];
    }
    getTexto(){
        return 'Hola Mundo desde un servicio';
    }
    //obtener array
    getZapatilla(): Array<Zapatilla>{
         return this.zapatillas;
    }


}