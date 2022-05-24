import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginDto } from '../entidades/LoginDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string= "http://localhost:8080/"

  constructor(private http: HttpClient) { }
  public login(credentials:LoginDto) : Observable<Boolean> {
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

  public isUserLogged():boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
