import { Injectable, signal, computed, effect, inject } from '@angular/core';
import {PokemonListResponse, Pokemon as PokemonModel} from '../shared/models/pokemon';
import { POKEMON_CONFIG } from '../shared/config/pokemon-config';
import {httpResource} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private config = inject(POKEMON_CONFIG);
  apiBaseUrl = this.config.apiBaseUrl;

  pokemonResource = httpResource<PokemonModel[]>(() =>({
    url: this.apiBaseUrl + "/pokemon",
    params: {limit:100, offset: 0}
  }), {
  defaultValue: [],
  parse: (response) => (response as PokemonListResponse).results.map(item => ({
  name: item.name,
  id: Number(item.url.split('/').at(-2))
}))
});

  private pokemonTeam = this.pokemonResource.value;

  pokemonList = computed(() => this.pokemonResource.error() ? [] : this.pokemonTeam());
  isLoading = this.pokemonResource.isLoading;
  error = this.pokemonResource.error;


  /*
    pokemonList = this.pokemonTeam.asReadonly();

    /*megaPokemon = computed(() =>
      this.pokemonTeam().filter(pokemon => pokemon.megaEvolution)
    );
  */

  constructor() {
    effect (() =>{
      console.log('Pokemon count is now', this.pokemonList().length);
    });
  }
    addPokemon(pokemon: PokemonModel): void {
      this.pokemonTeam.update(list => [...list, pokemon]);
    }

    updatePokemon(updatedPokemon: PokemonModel): void {
      this.pokemonTeam.update(list => list.map(pokemon => pokemon.id === updatedPokemon.id ? updatedPokemon : pokemon)
      );
    }

    removePokemon(id:number): void {
      this.pokemonTeam.update(list => list.filter(pokemon => id !== pokemon.id ));
  }

  /*
  megaPokemonCount = computed(()=>
    this.megaPokemon().length
  );

    */

}
