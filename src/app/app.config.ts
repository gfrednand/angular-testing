import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideApollo} from 'apollo-angular';
import { HttpLink, InMemoryCache } from '@apollo/client/core';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideApollo(()=>({
      cache: new InMemoryCache(),
      link: new HttpLink({uri:'http://localhost:3000/graphql'})
    }))
  ],
};
