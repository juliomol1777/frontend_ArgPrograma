import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {


  persona!:Persona; //el signo ! es para usar sin inicializar
  usuarioAutenticado:Boolean = true;//al inicio   debe estar en false
  form:FormGroup;

  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder,
              private autenticacion:AutenticacionService) {

    this.form=this.miFormBuilder.group({
    fullName:['',[Validators.required, Validators.minLength(5)]],
    position:['',[Validators.required]],
    ubication:['',[Validators.required]],
    about:['',[Validators.required]],
    url:['https://',[Validators.required, Validators.pattern('https?://.+')]],
    image_background:['https://',[Validators.required, Validators.pattern('https?://.+')]],
    email:['', [Validators.required, Validators.email ]]
    })
   }

   private cargarDatos(){
    this.datosPorfolio.obtenerDatosPersona(1).subscribe( data => {
      console.log("Datos personales" + JSON.stringify(data));
      //this.miPorfolio = data[0];
      this.persona = data;
    })
   }

  ngOnInit(): void {
    this.usuarioAutenticado= this.autenticacion.usuarioAutenticado;
    this.cargarDatos();
  }

  get fullName()
  {
    return this.form.get("fullName");
  }

  private limpiarForm() {
    this.form.setValue({
      fullname: '',
      position: '',
      ubication: '',
      about: '',
      url: '',
      image_background: '',
      email: '',
    })
  }

  nuevoDatosAcercaDe(){
    this.limpiarForm();
  }

  /*
  guardarDatosAcercaDe(){
    if (this.form.valid)
    {
      let fullname=this.form.get("fullName")?.value;
      let position=this.form.get("position")?.value;
      let ubication=this.form.get("ubication")?.value;
      let about=this.form.get("about")?.value;
      let url=this.form.get("url")?.value;
      let image_background=this.form.get("image_background")?.value;
      let email=this.form.get("email")?.value;

      let personaEditar=new Persona(this.persona.id,fullname,position,ubication, about, url, image_background, email);
      this.datosPorfolio.editarDatosPersona(personaEditar).subscribe({next: (d) => {
        this.persona=personaEditar;
        document.getElementById("cerrarModalEncabezado")?.click();
      },
        error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
      })
    }
    else{
      //alert("Hay errores");
      this.form.markAllAsTouched();
    }
  }
  */
  onSubmit() {
    let perso: Persona = this.form.value;
    if (this.form.get('id')?.value == '') {
      this.datosPorfolio.crearDatosPersona(perso).subscribe(
        {next: (d) => {
          this.persona=perso;
          document.getElementById("cerrarModalEncabezado")?.click();
        },
          error:(e)=> {alert("Ups, no se puedo actualizar el registro.")}
        }
      );
    } else {
      this.datosPorfolio.editarDatosPersona(perso).subscribe(
        () => {
          this.cargarDatos();
        }
      )
    }
  }


  //falta el de editar

  borrarDatosAcercaDe(){
    if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
      this.datosPorfolio.borrarDatosEducacion(this.persona.id).subscribe( ()=> {
        this.cargarDatos();
      })
    }
  }

  mostrarDatosAcercaDe()
  {
    this.form.get("fullName")?.setValue(this.persona.fullname);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("about")?.setValue(this.persona.about);
    this.form.get("url")?.setValue(this.persona.image);
    this.form.get("image_background")?.setValue(this.persona.image_background);
    this.form.get("email")?.setValue(this.persona.email);
  }

}
