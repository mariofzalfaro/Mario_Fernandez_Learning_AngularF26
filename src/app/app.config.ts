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
    useFactory: () => {
      const isLocal = true;

      if(isLocal) {
      return{
      apiBaseUrl: 'https://pokemon-dev.com/api',
      pokemonName: 'Gengar'
      };
      } else {
        return {
          apiBaseUrl: 'https://pokemon-prod.com/api',
          pokemonName: 'Gengar'
        };
      }
    }
    },
    /* Comment this provider to activate or deactivate the mock pokemon*/{
      provide: PokemonService,
      useClass: MockPokemonService
    }
  ]
};


