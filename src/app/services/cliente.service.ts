import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) { }

  /* por medio de promesas
  import { map } from 'rxjs/operators';
  import { Cliente } from './../clases/clientes';


  getClientes(): Promise<Cliente[]>{
    const urlAuth = `${environment.apiUrl}/api/clientes`;
    return this.http.get(urlAuth).pipe( 
        map( (data:Cliente[])=> {
            return data;
        }),
    ).toPromise();
  }*/

  getClientes(): Observable<any>{
    const urlAuth = `${environment.apiUrl}/api/clientes`;
    return this.http.get(urlAuth);
  }
}
