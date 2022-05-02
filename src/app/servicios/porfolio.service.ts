import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  //url: String= "http://npinti.ddns.net:9008/api/";

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{
    //console.log("hola")
    //return this.http.get(this.url+ "persona");
    return this.http.get('./assets/data/data.json');
  }
}
