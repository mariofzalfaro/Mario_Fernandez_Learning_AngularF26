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
  onPokemonOpened(id: number): void {
    console.log(id);
  }
}
