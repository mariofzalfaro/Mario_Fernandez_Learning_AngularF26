import {Component, computed, inject, input, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from '../services/pokemon';
import {UpperCasePipe} from '@angular/common';
import {Highlight} from '../directives/highlight';

@Component({
  imports: [
    UpperCasePipe,
    Highlight
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

  private openedAt = 0;

  ngOnInit(): void {
    const id = Number(this.id());
    const pokemon = this.pokemonService.pokemonList().find(p => p.id === Number(this.id()));
    this.openedAt = Date.now();
    console.log(`[lifecycle] opened: ${pokemon?.name}`);
  }

  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);
    console.log(`[lifecycle] closed: ${this.pokemon()?.name} after ${seconds} seconds`);
  }

}
