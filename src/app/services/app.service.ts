import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  http = inject(HttpClient);
  getPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto', {
      responseType: 'json',
    });
  }
}
