import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  persona!:Persona; //el signo ! es para usar sin inicializar
  usuarioLogeado = false;

  constructor(private datosPorfolio:PorfolioService, private tokenService: TokenService
    /*private autenticacion:AutenticacionService*/) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosPersona().subscribe( data => {
      console.log("Datos personales" + JSON.stringify(data));
        this.persona = data[0];
    })
    if (this.tokenService.getToken() && this.tokenService.getToken() !== '') {
      this.usuarioLogeado=true;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }


    /*
    this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
    this.datosPorfolio.obtenerDatosPersona().subscribe( data => {
      console.log("Datos personales" + JSON.stringify(data));
        this.persona = data[0];
    })
  }

  logout(): void {
    this.autenticacion.logout();
    this.usuarioAutenticado = false;
    window.location.reload();
  }*/
}
