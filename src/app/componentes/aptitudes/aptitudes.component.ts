import { Component, OnInit } from '@angular/core';
import { Tecnologias } from 'src/app/entidades/tecnologias';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  aptitudesList!:Tecnologias[];
  usuarioAutenticado:Boolean = false;

  constructor(private datosPorfolio:PorfolioService, private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
    this.datosPorfolio.obtenerDatosTecnologias().subscribe( data => {
      this.aptitudesList = data;
    })

  }
}
