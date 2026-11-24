import { Component, inject } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import { PokemonListItem} from '../pokemon-list-item/pokemon-list-item';
import { PokemonService } from '../services/pokemon';
import {RouterLink} from '@angular/router';
import {Confirm} from '../directives/confirm';

@Component({
  imports: [PokemonListItem, RouterLink, Confirm],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {
  private pokemonService = inject(PokemonService);
  pokemonList = this.pokemonService.pokemonList;
  isLoading = this.pokemonService.isLoading;
  error = this.pokemonService.error;
  apiBaseUrl = this.pokemonService.apiBaseUrl;
  deletePokemon(id: number): void {
    this.pokemonService.removePokemon(id);
  }
/*
  onPokemonOpened(id: number): void {
    console.log(id);
    this.pokemonService.removePokemon(id);
  }
*/

}
