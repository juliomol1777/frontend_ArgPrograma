import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/entidades/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList!: Experiencia[];
  usuarioAutenticado:Boolean = false;

  constructor(private datosPorfolio:PorfolioService, private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
    this.datosPorfolio.obtenerDatosExperiencia().subscribe( data => {
      this.experienciaList = data;
    })
  }

}
