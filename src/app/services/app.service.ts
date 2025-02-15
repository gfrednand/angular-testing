import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  http = inject(HttpClient);
  getPokemon(url: string) {
    return this.http.get(url, {
      responseType: 'json',
    });
  }
}
