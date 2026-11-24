import { Component, inject, computed } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import { PokemonListItem} from '../pokemon-list-item/pokemon-list-item';
import { PokemonService } from '../services/pokemon';
import {RouterLink} from '@angular/router';
import {Confirm} from '../directives/confirm';
import {SavedService} from '../services/saved-service';

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
  savedService = inject(SavedService);
  deletePokemon(id: number): void {
    this.pokemonService.removePokemon(id);
  }

  savedPokemon = computed(() =>
    this.savedService.saved().map(id => this.pokemonList().find(pokemon => pokemon.id === id)).filter(pokemon => pokemon !== undefined));

  sortedList = computed(() =>
    this.savedService.sortOrder() === 'name' ? [...this.pokemonList()].sort((a,b) => a.name.localeCompare(b.name)): this.pokemonList()
    );
  /*
  onPokemonOpened(id: number): void {
    console.log(id);
    this.pokemonService.removePokemon(id);
  }
*/

}
