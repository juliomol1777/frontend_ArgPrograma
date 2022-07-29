import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/entidades/experiencia';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList!: Experiencia[];
  isAdmin = false;
  roles!: string[];
  form:FormGroup;

  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder,
    private tokenService:TokenService) {
    this.form=this.miFormBuilder.group({
      id: [''],
      position:['',[Validators.required]],
      company:['',[Validators.required]],
      start:['',[Validators.required]],
      end:['',[Validators.required]],
      time:['',[Validators.required]],
      mode:['',[Validators.required]],
      place:['',[Validators.required]],
      image:['https://',[Validators.required, Validators.pattern('https?://.+')]]
      })
   }

  private cargarDatos(){
    this.datosPorfolio.obtenerDatosExperiencia().subscribe( data => {
      this.experienciaList = data;
    })
   }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.cargarDatos();
  }

  private limpiarForm() {
    this.form.setValue({
      id:'',
      position: '',
      company: '',
      start: '',
      end: '',
      time: '',
      mode: '',
      place: '',
      image:''
    })
  }

  onNuevaExperiencia(){
    this.limpiarForm();
  }

  onSubmit() {
    let experiencia: Experiencia = this.form.value;
    if (this.form.get('id')?.value == '') {
      this.datosPorfolio.crearDatosExperiencia(experiencia).subscribe(
        (newExperiencia: Experiencia) => {
          this.experienciaList.push(newExperiencia);
        }
      );
    } else {
      this.datosPorfolio.editarDatosExperiencia(experiencia).subscribe(
        () => {
          this.cargarDatos();
        }
      )
    }
  }
  onEditarExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    this.mostrarDatosExperiencia(experiencia);
  }

  onBorrarExperiencia(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
      this.datosPorfolio.borrarDatosExperiencia(experiencia.id).subscribe(
        () => {
          this.cargarDatos();
        }
      )
    }
  }

  private mostrarDatosExperiencia(experiencia: Experiencia) {
    this.form.setValue({
      id: experiencia.id,
      position: experiencia.position,
      company: experiencia.company,
      start: experiencia.start,
      end: experiencia.end,
      time: experiencia.time,
      mode: experiencia.mode,
      place: experiencia.place,
      image: experiencia.image
    })
  }

}
