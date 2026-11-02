import {Injectable, signal, computed, effect, inject} from '@angular/core';
import { Pokemon as PokemonModel } from '../shared/models/pokemon';
import {POKEMON_CONFIG} from '../shared/config/pokemon-config';

@Injectable()
export class MockPokemonService {
  private config = inject(POKEMON_CONFIG);
  apiBaseUrl = this.config.apiBaseUrl;
  private pokemonTeam = signal<PokemonModel[]>([
    {
      name: 'Sceptile',
      pokedexNumber: 254,
      type: 'Grass',
      generation: 3,
      megaEvolution: true
    },
    {
      name: 'Blaziken',
      pokedexNumber: 257,
      type: 'Fire',
      generation: 3,
      megaEvolution: true
    },
    {
      name: 'Swampert',
      pokedexNumber: 260,
      type: 'Water',
      generation: 3,
      megaEvolution: true
    }
  ]);

  pokemonList = this.pokemonTeam.asReadonly();

  megaPokemon = computed(() =>
    this.pokemonTeam().filter(pokemon => pokemon.megaEvolution)
  );

  megaPokemonCount = computed(() =>
    this.megaPokemon().length
  );

  addPokemon(pokemon: PokemonModel): void {
    this.pokemonTeam.update(list => [...list, pokemon]);
  }

  removePokemon(id: number): void {
    this.pokemonTeam.update(list =>
      list.filter(pokemon => id !== pokemon.pokedexNumber)
    );
  }

}
