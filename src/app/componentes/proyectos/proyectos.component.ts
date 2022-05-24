import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form:FormGroup;

  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder, private autenticacion:AutenticacionService) {
    this.form=this.miFormBuilder.group({
      id: [''],
      name:['',[Validators.required]],
      info:['',[Validators.required]]
      })
   }

  private cargarDatos(){
    this.datosPorfolio.obtenerDatosProyectos().subscribe( data => {
      this.proyectosList = data;
    })
   }

ngOnInit(): void {
  this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
  this.cargarDatos();
}

private limpiarForm() {
  this.form.setValue({
    id:'',
    name: '',
    info: ''
  })
}

onNuevoProyecto(){
  this.limpiarForm();
}

onSubmit() {
  let proyecto: Proyectos = this.form.value;
  if (this.form.get('id')?.value == '') {
    this.datosPorfolio.crearDatosProyectos(proyecto).subscribe(
      (newProyectos: Proyectos) => {
        this.proyectosList.push(newProyectos);
      }
    );
  } else {
    this.datosPorfolio.editarDatosProyectos(proyecto).subscribe(
      () => {
        this.cargarDatos();
      }
    )
  }
}
onEditarProyecto(index: number) {
  let proyecto: Proyectos = this.proyectosList[index];
  this.mostrarDatosProyecto(proyecto);
}

onBorrarProyecto(index: number) {
  let proyecto: Proyectos = this.proyectosList[index];
  if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
    this.datosPorfolio.borrarDatosProyectos(proyecto.id).subscribe(
      () => {
        this.cargarDatos();
      }
    )
  }
}

private mostrarDatosProyecto(proyecto: Proyectos) {
  this.form.setValue({
    id: proyecto.id,
    name: proyecto.name,
    info: proyecto.info
  })
}


}
