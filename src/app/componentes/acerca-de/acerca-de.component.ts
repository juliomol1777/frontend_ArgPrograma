import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona!:Persona; //el signo ! es para usar sin inicializar
  usuarioAutenticado:boolean=true;//al inicio   debe estar en false
  form:FormGroup;

  constructor(private datosPorfolio:PorfolioService, private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      fullName:['',[Validators.required, Validators.minLength(5)]],
      position:['',[Validators.required]],
      ubication:['',[Validators.required]],
      about:['',[Validators.required]],
      url:['https://',[Validators.required, Validators.pattern('https?://.+')]]
    })
   }

   get fullName()
  {
    return this.form.get("fullName");
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatosPersona(1).subscribe( data => {
      console.log("Datos personales" + JSON.stringify(data));
      //this.miPorfolio = data[0];
      this.persona = data;
    })
  }

  guardarDatosAcercaDe(){
    if (this.form.valid)
    {
      let fullname=this.form.get("fullName")?.value;
      let position=this.form.get("position")?.value;
      let ubication=this.form.get("ubication")?.value;
      let about=this.form.get("about")?.value;
      let url=this.form.get("url")?.value;

      let personaEditar=new Persona(this.persona.id,fullname,position,ubication, about, url);
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

  mostrarDatosAcercaDe()
  {
    this.form.get("fullName")?.setValue(this.persona.fullname);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("about")?.setValue(this.persona.about);
    this.form.get("url")?.setValue(this.persona.image);
  }

}
