import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../entidades/nuevo-usuario';
import { LoginUsuario } from '../entidades/login-usuario';
import { JwtDto } from '../entidades/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  authURL = 'http://localhost:8080/auth/';
  //url: string= "http://localhost:8080/";
  //currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {}

    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
      return this.http.post<any>(this.authURL + 'nuevo', nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
      return this.http.post<JwtDto>(this.authURL + 'login', loginUsuario);
    }

    /*
    get usuarioAutenticado(){
      if (this.tokenService.getToken()) {
        this.usuarioAutenticado = true;
      } else {
        this.usuarioAutenticado = false;
      }
    }




    console.log("El servicio de autenticacion esta corriendo");
    //this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("Sesionultima") || '{}'))
  }

  iniciarSesion(credenciales: any){
    console.log("iniciar secion credenciales "+ credenciales);
    return this.http.post(this.url + "login", credenciales).pipe(map( data => {
      sessionStorage.setItem("Sesionultima", JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log("iniciar secion data "+data);
      return data;
    }

    ))
  }

  public iniciarSesion(credentials:LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(this.url + "login", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "usuario");
      })
    );
  }


  public logout() {
    sessionStorage.removeItem("USERNAME_KEY");
  }

  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }*/

}
