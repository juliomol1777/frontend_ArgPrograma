import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/entidades/educacion';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList!:Educacion[];
  usuarioAutenticado:Boolean = false;

  constructor(private datosPorfolio:PorfolioService, private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
    this.datosPorfolio.obtenerDatosEducacion().subscribe( data => {
      this.educacionList = data;
    })

  }

}
