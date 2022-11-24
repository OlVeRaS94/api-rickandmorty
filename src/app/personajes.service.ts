import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PersonajesService {
  constructor(private http: HttpClient) {}

  retornar() {
    return this.http.get('https://rickandmortyapi.com/api/character/1,183,7,2');
  }
}
