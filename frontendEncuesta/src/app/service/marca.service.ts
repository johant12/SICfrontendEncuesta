import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private baseUrl = 'http://localhost:8080/api/v1/marcas';

  constructor(private http: HttpClient) { }

  getMarcasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
