import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PorfolioService } from './servicios/porfolio.service';
//import { InterceptorService } from './servicios/interceptor.service';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    AptitudesComponent,
    ProyectosComponent,
    IniciarSesionComponent,
    PorfolioComponent,
    ExperienciaComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PorfolioService /*,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
