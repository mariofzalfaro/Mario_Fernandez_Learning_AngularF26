import { Component, input, output } from '@angular/core';
import {Pokemon} from '../shared/models/pokemon';
import {DecimalPipe, TitleCasePipe} from '@angular/common';
import {PokemonNamePipe} from '../pokemon-name-pipe';
import {GenerationPipe} from '../generation-pipe';
import {Highlight} from '../directives/highlight';


@Component({
  imports: [
    TitleCasePipe,
    DecimalPipe,
    PokemonNamePipe,
    GenerationPipe,
    Highlight
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

