import {Component, inject, input, effect, viewChild, ElementRef, afterNextRender} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { PokemonService } from '../services/pokemon';
import {Pokemon as PokemonModel} from '../shared/models/pokemon';
import { Router } from '@angular/router';
import { pokedexRange} from '../validators/pokemon-validators';
import { pokedexMatchesGeneration } from '../validators/pkdx-generation-validator'

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-pokemon-form',
  styleUrl: './pokemon-form.css',
  templateUrl: './pokemon-form.html',
})
export class PokemonForm {
  id = input<string>();
  private fb = inject(FormBuilder);
  private pokemonService = inject(PokemonService);
  private router = inject(Router);
  nInput = viewChild<ElementRef<HTMLInputElement>>('nInput');
    pokeForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    id: [1, [Validators.required, pokedexRange]],
    // types: [[{type: {name: 'Grass'}}], Validators.required],
    /*generation: ['i'],
    megaEvolution: [false]*/
  } /*, {validators: pokedexMatchesGeneration}*/ );

  constructor() {
    // The code goe here because it needs the real DOM input, it needs to run once after Angular renders it.
    afterNextRender(() => {
      this.nInput()?.nativeElement.focus();
    });

    effect(() => {
      const pokemonId = this.id();
      if (pokemonId) {
        const pokemon = this.pokemonService.pokemonList().find(pokemon => pokemon.id === Number(pokemonId));
        if (pokemon) {
          this.pokeForm.patchValue(pokemon);
        }
      }
    });


  }


  onSubmit(): void {
    if (this.pokeForm.invalid) return;
      const value = this.pokeForm.getRawValue();
      const id = this.id();
      const pokemon: PokemonModel = {
      name: value.name,
      id: id ? Number (id) : value.id,
      // types: value.types,
      /*generation: value.generation!,
      megaEvolution: value.megaEvolution!*/
      };
      if (id) {
      this.pokemonService.updatePokemon(pokemon);
      this.router.navigate(['/pokemon', id]);
      } else {
        this.pokemonService.addPokemon(pokemon);
        this.pokeForm.reset({
          name: '',
          id: 1,
          // types: [],
          /*generation: 'i',
          megaEvolution: false*/
        });
      }
  }
  }

