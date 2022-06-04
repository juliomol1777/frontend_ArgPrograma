import { Component } from '@angular/core';
import { AutenticacionService } from './servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mi Portfolio';
  usuarioAutenticado: boolean = false;

  constructor(private autenticadoService: AutenticacionService) {}

  ngOnInit(): void {
    this.usuarioAutenticado = this.autenticadoService.usuarioAutenticado;
  }
  //
}
