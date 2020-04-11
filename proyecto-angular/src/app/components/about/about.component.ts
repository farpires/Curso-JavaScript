import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  public cel: string;

  constructor() { 
    this.title = "Fabio Arpires ";
    this.subtitle = "Tecnico en Desarrollardor de Software";
    this.email= "arpirez.fabio@gmail.com";
    this.cel= "3834912105";
   }

  ngOnInit(): void {
  } 

}
