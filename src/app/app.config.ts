import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { POKEMON_CONFIG } from './shared/config/pokemon-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
  {
    provide: POKEMON_CONFIG,
    useValue: {
      apiBaseUrl: 'https://pokemon-placeholder.example.com/api',
      pokemonName: 'Gengar'
    }
  }
  ]
};


