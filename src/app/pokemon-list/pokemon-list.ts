import { Component } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import { PokemonListItem} from '../pokemon-list-item/pokemon-list-item';

@Component({
  imports: [PokemonListItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  pokemonTeam: Pokemon[] = [
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
  ]
}
