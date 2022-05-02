import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url= "http://npinti.ddns.net:9008/api/auth/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log("El servicio de autenticacion esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("Sesionultima") || '{}'))
  }

  iniciarSesion(credenciales: any){
    return this.http.post(this.url, credenciales).pipe(map( data => {
      sessionStorage.setItem('Sesionultima', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }

    ))
  }

  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}
