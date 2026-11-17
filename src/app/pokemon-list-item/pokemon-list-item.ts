import { Component, input, output } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import {DecimalPipe, TitleCasePipe} from '@angular/common';


@Component({
  imports: [
    TitleCasePipe,
    DecimalPipe
  ],
  selector: 'app-pokemon-list-item',
  styleUrl: './pokemon-list-item.css',
  templateUrl: './pokemon-list-item.html',
})
export class PokemonListItem {
  pokemon = input.required<Pokemon>();

  pokemonOpened = output<number>();

  openPokemon(): void {
    this.pokemonOpened.emit(this.pokemon().id);
  }
}

