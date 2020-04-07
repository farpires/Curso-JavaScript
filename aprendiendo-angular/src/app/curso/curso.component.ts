import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'cursos',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.styl']
})
export class CursoComponent implements OnInit {
  public nombre: string;
  public follower: number ;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre;
      this.follower = +params.follower;
      // console.log(this.nombre) 
      if(this.nombre == 'ninguno'){
        this._router.navigate(['home'])
      }
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas'])
  }

}
