import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  url: string= "http://localhost:8080/persona";

  constructor(private http: HttpClient) { }

  obtenerDatosPersona(id:number): Observable<any>{
    //console.log("hola")
    return this.http.get(this.url+ "/"+id);
    //return this.http.get('./assets/data/data.json');
  }
  editarDatosPersona(persona:Persona):Observable<any>{
    return this.http.put(this.url,persona);
  }
}
