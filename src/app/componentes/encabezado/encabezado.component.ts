import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona!:Persona; //el signo ! es para usar sin inicializar

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosPersona(1).subscribe( data => {
      console.log("Datos personales" + JSON.stringify(data));
      //this.miPorfolio = data[0];
      this.persona = data;
    })
  }
}
