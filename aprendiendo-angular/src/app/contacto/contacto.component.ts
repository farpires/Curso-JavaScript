import { Component, OnInit } from '@angular/core';
import { ConstactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.styl']
})
export class ContactoComponent implements OnInit {
  public usuario: ConstactoUsuario;
  constructor() {
    this.usuario =  new ConstactoUsuario('','','','');
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Evento submit lanzado")
  }

}
