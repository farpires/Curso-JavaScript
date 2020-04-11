import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import {Global} from '../../services/global'

@Component({ //ESTOS SON PROPIEDAD del componente
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ ProjectService,UploadService ]

})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;//este sera el objeto que modificara el fomrulario 
  public save_project;
  public status: string;
  public url: string;
  public filesToUpload: Array<File>;
  constructor(
    private _projectService: ProjectService,
    private  _uploadService: UploadService
    ) {
      this.title = "Crear projecto";
      this.project = new Project('','','','',2020,'','');
      this.url = Global.url;

   }

  ngOnInit(): void {
  }
  
onSubmit(form){
     
       //GUARDAR LOS DATOS BASICOS 
       this._projectService.saveProject(this.project).subscribe(
         response =>{
            // console.log(response);
            if(response.project){
              //SUBIR LA IMAGEN - /upload-image/:id
              if(this.filesToUpload){
              this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [],this.filesToUpload, 'image')
                  .then((result:any)=>{

                    // this.save_project = result;
                    this.save_project = result.project;
                    this.status = 'success'; 
                    form.reset();//para reiniciar el fomrulario
                  });
                }else{
                  this.save_project = response.project;
                  this.status = 'success'; 
                  form.reset();//para reiniciar el fomrulario
                }
            }else{

              this.status = 'failed';
            }
         },
         error =>{
            console.log(<any>error);
         }
       )
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files; //se seleciona la imgagen
        // console.log(fileInput);  
  }
}
