import { Component, OnInit } from '@angular/core';
import { Tecnologias } from 'src/app/entidades/tecnologias';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  aptitudesList!:Tecnologias[];

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosTecnologias().subscribe( data => {
      this.aptitudesList = data;
    })

  }
}
