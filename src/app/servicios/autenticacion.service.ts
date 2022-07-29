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

  authURL = 'https://juliom-portfolio-argprog.herokuapp.com/auth/';

  constructor(private http: HttpClient) {}

    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
      return this.http.post<any>(this.authURL + 'nuevo', nuevoUsuario);
    }

    public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
      return this.http.post<JwtDto>(this.authURL + 'login', loginUsuario);
    }
}
