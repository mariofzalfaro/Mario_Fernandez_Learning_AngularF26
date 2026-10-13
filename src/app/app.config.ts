import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { POKEMON_CONFIG } from './shared/config/pokemon-config';
import { Pokemon as PokemonService } from './services/pokemon';
import { MockPokemonService } from './services/mock-pokemon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
  {
    provide: POKEMON_CONFIG,
    useValue: {
      apiBaseUrl: 'https://pokemon.example.com/api',
      defaultCategory: 'all'
    }
    },
    /* Comment this provider to activate or deactivate the mock Pokémon*/{
      provide: PokemonService,
      useClass: MockPokemonService
    }
  ]
};


