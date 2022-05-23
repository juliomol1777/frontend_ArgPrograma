import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona!:Persona; //el signo ! es para usar sin inicializar
  usuarioAutenticado:Boolean = false;

  constructor(private datosPorfolio:PorfolioService, private autenticacion:AutenticacionService) { }

  ngOnInit(): void {
    this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
    this.datosPorfolio.obtenerDatosPersona(1).subscribe( data => {
      console.log("Datos personales" + JSON.stringify(data));
      //this.miPorfolio = data[0];
      this.persona = data;
    })
  }

  logout(): void {
    this.autenticacion.logout();
    this.usuarioAutenticado = false;
    window.location.reload();
  }
}
