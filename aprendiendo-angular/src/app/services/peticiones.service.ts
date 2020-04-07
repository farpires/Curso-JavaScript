import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';//nos prmite hacer peticiones ajax a un servicio externo  a una URL.. y tambien modificar las cabesar de esas peticiones 
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PeticionesService{
    public url: string;
    constructor(
        public _http: HttpClient
    ){   
        this.url = "https://reqres.in/"; 
     }
     getUser(userId): Observable<any>{
         return this._http.get(this.url+'api/users/2'+userId);
     }
}