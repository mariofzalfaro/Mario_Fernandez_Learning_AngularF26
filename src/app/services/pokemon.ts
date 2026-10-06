import { Service, signal } from '@angular/core';
import { Pokemon as PokemonModel} from '../shared/models/pokemon';

@Service()
export class Pokemon {
  private pokemonTeam = signal<PokemonModel[]>([
    {
      name: 'Venusaur',
      pokedexNumber: 3,
      type: 'Grass',
      generation: 1,
      megaEvolution: true
    },
    {
      name: 'Arcanine',
      pokedexNumber: 59,
      type: 'Fire',
      generation: 1
    },
    {
      name: 'Rhyperior',
      pokedexNumber: 464,
      type: 'Ground',
      generation: 4
    },
    {
      name: 'Gyarados',
      pokedexNumber: 130,
      type: 'Water',
      generation: 1,
      megaEvolution: true
    },
    {
      name: 'Gengar',
      pokedexNumber: 94,
      type: 'Ghost',
      generation: 1,
      megaEvolution: true
    },
    {
      name: 'Raichu',
      pokedexNumber: 26,
      type: 'Electric',
      generation: 1
    }
  ])

  pokemonList = this.pokemonTeam.asReadonly();

}
