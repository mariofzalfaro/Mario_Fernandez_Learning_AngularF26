import {Component, inject, input, effect} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Pokemon as pokemonService} from '../services/pokemon';
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
  private pokemonService = inject(pokemonService);
  private router = inject(Router);

    pokeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    pokedexNumber: [1, [Validators.required, pokedexRange]],
    type: ['Grass'],
    generation: ['i'],
    megaEvolution: [false]
  }, {validators: pokedexMatchesGeneration});

  constructor() {
    effect(() => {
      const pokemonId = this.id();
      if (pokemonId) {
        const pokemon = this.pokemonService.pokemonList().find(pokemon => pokemon.pokedexNumber === Number(pokemonId));
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
      name: value.name!,
      pokedexNumber: id ? Number (id) : value.pokedexNumber!,
      type: value.type as PokemonModel['type'],
      generation: value.generation!,
      megaEvolution: value.megaEvolution!
      };
      if (id) {
      this.pokemonService.updatePokemon(pokemon);
      this.router.navigate(['/pokemon', id]);
      } else {
        this.pokemonService.addPokemon(pokemon);
        this.pokeForm.reset({
          name: '',
          pokedexNumber: 1,
          type: 'Grass',
          generation: 'i',
          megaEvolution: false
        });
      }
  }
  }

