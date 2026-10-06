import { Component, inject } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import { PokemonListItem} from '../pokemon-list-item/pokemon-list-item';
import { Pokemon as PokemonService } from '../services/pokemon';

@Component({
  imports: [PokemonListItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  private pokemonService = inject(PokemonService);
  pokemonList = this.pokemonService.pokemonList;

  megaPokemon = this.pokemonService.megaPokemon;

  onPokemonOpened(id: number): void {
    console.log(id);
  }
}
