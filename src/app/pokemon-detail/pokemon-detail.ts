import {Component, computed, inject, input} from '@angular/core';
import {Pokemon} from '../services/pokemon';

@Component({
  imports: [],
  selector: 'app-pokemon-detail',
  styleUrl: './pokemon-detail.css',
  templateUrl: './pokemon-detail.html',
})
export class PokemonDetail {
private Pokemon = inject(Pokemon);
id = input.required<string>();
pokemon = computed(() =>
this.Pokemon.pokemonList().find(pokemon => pokemon.pokedexNumber === Number(this.id())
));
}
