//
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url:string;
    constructor(
    private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Provando el servicio de angular ';
    }
    saveProject(project: Project): Observable<any>{
        let params = JSON.stringify(project);//vana  ser los parametros que vamos a enviar TODOS LOS DATOS DEL OBJETOS
        let headers = new HttpHeaders().set('Content-Type','application/json'); //Cabecera{Como enviaremos la informacion}LA INFORMACION VIJARA EN ESE FOMRATO
        //por ultimo vamos a hacer la peticion por post, porque para dar de alta datos.. por que para crear se utiliza el metodos post
        return this._http.post(this.url+'save-project',params,{headers: headers}); 
    }
    getProjects(): Observable<any>{
            let headers = new HttpHeaders().set('Content-Type','application/json');
            return this._http.get(this.url+'projects',{headers: headers});
    }
    getProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'project/'+id,{headers: headers});
    }
    deleteProject(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'project/'+id,{headers: headers});
    }
    updateProject(project): Observable<any>{
        //convertir al projecto en un json  
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'project/'+project._id,params,{headers: headers})

    }

//VERIIFCAR EL OBJEOT CONVERTIDO
} 