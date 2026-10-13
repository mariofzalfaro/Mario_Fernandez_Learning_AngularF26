import { InjectionToken } from '@angular/core';

export interface PokemonConfig {
  apiBaseUrl: string;
  pokemonName: string;
}

export const POKEMON_CONFIG = new InjectionToken<PokemonConfig>('Pokemon.config');

