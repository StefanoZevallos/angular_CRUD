import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }

  public enviarPersona(url:string,persona:any):Observable<any> {
    return this.http.post(url, persona)
  }

  public obtenerPersona(url:string):Observable<any> {
    return this.http.get(url)
  }

  public eliminarPersona(url:string):Observable<any> {
    return this.http.delete(url)
  }

  public editarPersona(url:string,body:string):Observable<any> {
    return this.http.put(url,body)
  }



}
