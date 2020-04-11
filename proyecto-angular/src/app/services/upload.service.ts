import{ Injectable } from '@angular/core';
import { Global } from './global';
// import { resolve } from 'dns';

@Injectable()
export class UploadService{
    public url: string;

    constructor(){
        this.url = Global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files:Array<File>, name: string){
        return new Promise(function(resolve,reject){
            //aqui Peticion ajax para subir archivos
            var formData:any = new FormData();//este objeto nos permitira crear un specie  de formulario en en un objeto
            var xhr = new XMLHttpRequest(); //esto es el tipico obeto de peticiones ASINCRONAS que siempre a havido en java script 
            for(var i = 0; i < files.length; i++){//para recorrer el array de archivo que me puede estar llegando
                formData.append(name,files[i],files[i].name);
            }

            //peticion AJAX
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.send(formData); 
        });
    }
}