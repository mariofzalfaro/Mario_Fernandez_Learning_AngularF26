import {Component, computed, inject, input} from '@angular/core';
import {PokemonService} from '../services/pokemon';
import {UpperCasePipe} from '@angular/common';

@Component({
  imports: [
    UpperCasePipe
  ],
  selector: 'app-pokemon-detail',
  styleUrl: './pokemon-detail.css',
  templateUrl: './pokemon-detail.html',
})
export class PokemonDetail {
private pokemonService = inject(PokemonService);
id = input.required<string>();
pokemon = computed(() =>
this.pokemonService.pokemonList().find(pokemon => pokemon.id === Number(this.id())
));
}
