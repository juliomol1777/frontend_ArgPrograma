import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form:FormGroup;

  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder,
              private autenticacion:AutenticacionService) {
    this.form=this.miFormBuilder.group({
      id: [''],
      name:['',[Validators.required]],
      progress:['',[Validators.required]]
      })
     }

     private cargarDatos(){
      this.datosPorfolio.obtenerDatosTecnologias().subscribe( data => {
        this.aptitudesList = data;
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
      progress: ''
    })
  }

  onNuevaAptitudes(){
    this.limpiarForm();
  }

  onSubmit() {
    let tecnologias: Tecnologias = this.form.value;
    if (this.form.get('id')?.value == '') {
      this.datosPorfolio.crearDatosTecnologias(tecnologias).subscribe(
        (newTecnologias: Tecnologias) => {
          this.aptitudesList.push(newTecnologias);
        }
      );
    } else {
      this.datosPorfolio.editarDatosTecnologias(tecnologias).subscribe(
        () => {
          this.cargarDatos();
        }
      )
    }
  }
  onEditarAptitudes(index: number) {
    let tecnologias: Tecnologias = this.aptitudesList[index];
    this.mostrarDatosAptitudes(tecnologias);
  }

  onBorrarAptitudes(index: number) {
    let tecnologias: Tecnologias = this.aptitudesList[index];
    if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
      this.datosPorfolio.borrarDatosTecnologias(tecnologias.id).subscribe(
        () => {
          this.cargarDatos();
        }
      )
    }
  }

  private mostrarDatosAptitudes(tecnologias: Tecnologias) {
    this.form.setValue({
      id: tecnologias.id,
      name: tecnologias.name,
      progress: tecnologias.progress
    })
  }
}
