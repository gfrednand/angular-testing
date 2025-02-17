import {
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { FirePipe } from './pipes/fire.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    UpperCasePipe,
    LowerCasePipe,
    DecimalPipe,
    HasPermissionDirective,
    FirePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-testing';
  amount = 10000000;
  ditto: any;
  dittoDetails: {[key:string]: any} = {};
  loadingData: WritableSignal<boolean> = signal(false);
  loadingDetails: WritableSignal<{[key:string]: boolean}> = signal({});
  constructor(private appService: AppService) {}

  getPokemon() {
    this.loadingData.set(true);
    this.appService.getPokemon('https://pokeapi.co/api/v2/pokemon/ditto').subscribe((res) => {
      this.ditto = res;
        this.loadingData.set(false);

    });
  }

  viewDetails(item: any){
    console.log(item);
    
    this.loadingDetails.set({[item.ability.url]:true });
    this.appService.getPokemon(item.ability.url).subscribe((res) => {
      this.dittoDetails[item.ability.url] = res;
      this.loadingDetails.set({[item.ability.url]:false });

    });
  }
}
