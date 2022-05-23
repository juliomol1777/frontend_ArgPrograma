import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginDto } from '../data/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url: string= "http://localhost:8080/";
  //currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log("El servicio de autenticacion esta corriendo");
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("Sesionultima") || '{}'))
  }

  /*iniciarSesion(credenciales: any){
    console.log("iniciar secion credenciales "+ credenciales);
    return this.http.post(this.url + "login", credenciales).pipe(map( data => {
      sessionStorage.setItem("Sesionultima", JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log("iniciar secion data "+data);
      return data;
    }

    ))
  }*/

  public iniciarSesion(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(this.url + "login", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "usuario");
      })
    );
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  /*get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }*/

  get usuarioAutenticado(){
    return sessionStorage.getItem("user") !== null;
  }
}
