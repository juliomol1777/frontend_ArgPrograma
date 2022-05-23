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

  //url: string= "http://localhost:8080/persona";
  url: string= "http://localhost:8080/";
  persona: string= "persona";
  educacion: string= "educacion";
  experiencia: string= "experiencia";
  proyectos: string= "proyectos";
  tecnologias: string= "tecnologias";


  constructor(private http: HttpClient) { }


  obtenerDatosPersona(id:number): Observable<any>{
    //console.log("hola")
    return this.http.get(this.url+ this.persona +"/"+id);
    //return this.http.get('./assets/data/data.json');
  }

  editarDatosPersona(perso:Persona):Observable<any>{
    return this.http.put(this.url,perso);
  }

  crearDatosPersona(perso:Persona):Observable<Persona>{
    return this.http.post<any>(this.url + this.persona,perso);
  }

  obtenerDatosEducacion(): Observable<Educacion[]>{
    //console.log("hola")
    return this.http.get<any>(this.url+ this.educacion);
    //return this.http.get('./assets/data/data.json');
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
    //console.log("hola")
    return this.http.get<any>(this.url+ this.experiencia);
    //return this.http.get('./assets/data/data.json');
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
    //console.log("hola")
    return this.http.get<any>(this.url+ this.proyectos);
    //return this.http.get('./assets/data/data.json');
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
    //console.log("hola")
    return this.http.get<any>(this.url+ this.tecnologias);
    //return this.http.get('./assets/data/data.json');
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
