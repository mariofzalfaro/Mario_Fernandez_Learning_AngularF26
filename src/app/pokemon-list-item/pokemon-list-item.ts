import { Component, input, output } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import {PokemonEvent} from '../shared/models/pokemon-event';

@Component({
  imports: [],
  selector: 'app-pokemon-list-item',
  styleUrl: './pokemon-list-item.css',
  templateUrl: './pokemon-list-item.html',
})
export class PokemonListItem {
  pokemon = input.required<Pokemon>();

  pokemonOpened = output<PokemonEvent>()

  openPokemon(): void {
    this.pokemonOpened.emit({
      id: this.pokemon().pokedexNumber,
      action: 'opened'
    });
  }
}

