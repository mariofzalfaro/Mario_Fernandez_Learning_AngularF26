import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { Pokemon as PokemonModel} from '../shared/models/pokemon';
import { POKEMON_CONFIG } from '../shared/config/pokemon-config';
import { PokemonApiDetail } from '../shared/models/pokemon-api';

@Injectable({
  providedIn: 'root'
})
export class Pokemon {

  private config = inject(POKEMON_CONFIG);
  apiBaseUrl = this.config.apiBaseUrl;

  private mapPokemon(api: PokemonApiDetail, generation: string): PokemonModel  {
    const typeName = api.types[0].type.name;

    return {
      name: api.name.charAt(0).toUpperCase() + api.name.slice(1),
      pokedexNumber: api.id,
      type: (typeName.charAt(0).toUpperCase() + typeName.slice(1)) as PokemonModel['type'],
      generation,
      megaEvolution: false,
    };
  }

  private pokemonTeam = signal<PokemonModel[]>([
    {
      name: 'Venusaur',
      pokedexNumber: 3,
      type: 'Grass',
      generation: 'i',
      megaEvolution: true
    },
    {
      name: 'Arcanine',
      pokedexNumber: 59,
      type: 'Fire',
      generation: 'i'
    },
    {
      name: 'Rhyperior',
      pokedexNumber: 464,
      type: 'Ground',
      generation: 'i'
    },
    {
      name: 'Gyarados',
      pokedexNumber: 130,
      type: 'Water',
      generation: 'i',
      megaEvolution: true
    },
    {
      name: 'Gengar',
      pokedexNumber: 94,
      type: 'Ghost',
      generation: 'i',
      megaEvolution: true
    },
    {
      name: 'Raichu',
      pokedexNumber: 26,
      type: 'Electric',
      generation: 'i'
    }
  ])

  pokemonList = this.pokemonTeam.asReadonly();

  megaPokemon = computed(() =>
    this.pokemonTeam().filter(pokemon => pokemon.megaEvolution)
  );

  addPokemon(pokemon: PokemonModel): void {
    this.pokemonTeam.update(list => [...list, pokemon]);
  }

  updatePokemon(updatedPokemon: PokemonModel): void {
    this.pokemonTeam.update(list => list.map(pokemon => pokemon.pokedexNumber === updatedPokemon.pokedexNumber ? updatedPokemon : pokemon)
    );
  }

  constructor() {
    effect (() =>{
      console.log('Pokemon count is now', this.pokemonTeam().length);
    });
  }

  removePokemon(id:number): void {
    this.pokemonTeam.update(list => list.filter(pokemon => id !== pokemon.pokedexNumber ));
}

megaPokemonCount = computed(()=>
  this.megaPokemon().length
);

}
