import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/entidades/proyectos';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList!: Proyectos[];
  usuarioAutenticado:Boolean = false;

  constructor(private datosPorfolio:PorfolioService, private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
    this.datosPorfolio.obtenerDatosProyectos().subscribe( data => {
      this.proyectosList = data;
    })
  }
}
