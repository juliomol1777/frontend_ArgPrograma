import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';
import { Experiencia } from '../entidades/experiencia';
import { Persona } from '../entidades/persona';
import { Proyectos } from '../entidades/proyectos';
import { Tecnologias } from '../entidades/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  url: string= "https://juliom-portfolio-argprog.herokuapp.com/";
  persona: string= "persona";
  educacion: string= "educacion";
  experiencia: string= "experiencia";
  proyectos: string= "proyectos";
  tecnologias: string= "tecnologias";


  constructor(private http: HttpClient) { }


  obtenerDatosPersona(): Observable<any>{
    return this.http.get<any>(this.url+ this.persona);
  }

  editarDatosPersona(perso:Persona):Observable<Persona>{
    return this.http.put<any>(this.url + this.persona,perso);
  }

  crearDatosPersona(perso:Persona):Observable<Persona>{
    return this.http.post<any>(this.url + this.persona,perso);
  }

  borrarDatosPersona(id: number):Observable<any>{
    return this.http.delete<any>(this.url + this.persona + "/" + id);
  }

  obtenerDatosEducacion(): Observable<Educacion[]>{
    return this.http.get<any>(this.url+ this.educacion);
  }

  editarDatosEducacion(educa:Educacion):Observable<Educacion>{
    return this.http.put<any>(this.url + this.educacion,educa);
  }

  crearDatosEducacion(educa:Educacion):Observable<Educacion>{
    return this.http.post<any>(this.url + this.educacion,educa);
  }

  borrarDatosEducacion(id: number):Observable<any>{
    return this.http.delete<any>(this.url + this.educacion + "/" + id);
  }

  obtenerDatosExperiencia(): Observable<Experiencia[]>{
    return this.http.get<any>(this.url+ this.experiencia);
  }

  editarDatosExperiencia(expe:Experiencia):Observable<Experiencia>{
    return this.http.put<any>(this.url + this.experiencia,expe);
  }

  crearDatosExperiencia(expe:Experiencia):Observable<Experiencia>{
    return this.http.post<any>(this.url + this.experiencia,expe);
  }

  borrarDatosExperiencia(id: number):Observable<any>{
    return this.http.delete<any>(this.url + this.experiencia + "/" + id);
  }

  obtenerDatosProyectos(): Observable<Proyectos[]>{
    return this.http.get<any>(this.url+ this.proyectos);
  }

  editarDatosProyectos(proye:Proyectos):Observable<Proyectos>{
    return this.http.put<any>(this.url + this.proyectos,proye);
  }

  crearDatosProyectos(proye:Proyectos):Observable<Proyectos>{
    return this.http.post<any>(this.url + this.proyectos,proye);
  }

  borrarDatosProyectos(id: number):Observable<any>{
    return this.http.delete<any>(this.url + this.proyectos + "/" + id);
  }

  obtenerDatosTecnologias(): Observable<Tecnologias[]>{
    return this.http.get<any>(this.url+ this.tecnologias);
  }

  editarDatosTecnologias(tecno:Tecnologias):Observable<Tecnologias>{
    return this.http.put<any>(this.url + this.tecnologias,tecno);
  }

  crearDatosTecnologias(tecno:Tecnologias):Observable<Tecnologias>{
    return this.http.post<any>(this.url + this.tecnologias,tecno);
  }

  borrarDatosTecnologias(id: number):Observable<any>{
    return this.http.delete<any>(this.url + this.tecnologias + "/" + id);
  }

}
