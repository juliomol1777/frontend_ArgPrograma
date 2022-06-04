import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  form: FormGroup;
  loginError: Boolean = false;

  constructor(private formBuilder: FormBuilder, private autentificacionService: AutenticacionService,
              private ruta: Router) {

    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email ]],
        password: ['', [Validators.required, Validators.minLength(8)] ]//,
        /*deviceInfo: this.formBuilder.group(
          {
            deviceId: ["17867868768"],
            deviceType: ["DEVICE_TYPE_ANDROID"],
            notificationToken: ["67657575eececc34"]
          }
        )*/
      }
    )
   }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email')
  }

  get Password(){
    return this.form.get('password')
  }

  /*onEnviar(event: Event){
    event.preventDefault;
    this.autentificacionService.iniciarSesion(this.form.value).subscribe(data =>{
      console.log("Data " + JSON.stringify(data));
      this.ruta.navigate(['/porfolio'])
    })
  }*/

  onEnviar(event: Event) {
    event.preventDefault;

    this.autentificacionService.iniciarSesion(this.form.value).subscribe(
      (response: Boolean) => {
        if (response){
          this.ruta.navigate(['/porfolio']);
        }
        else{
          this.loginError = true;
        }
      }
    );
  }

}
