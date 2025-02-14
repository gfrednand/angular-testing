import {
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './services/app.service';
import { HasPermissionDirective } from './directives/has-permission.directive';
import { FirePipe } from './pipes/fire.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, DecimalPipe, JsonPipe, HasPermissionDirective, FirePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-testing';
  amount = 10000000;
  ditto: any;
  constructor(private appService: AppService) {}

  getPokemon() {
    this.appService.getPokemon().subscribe((res) => (this.ditto = res));
  }
}
