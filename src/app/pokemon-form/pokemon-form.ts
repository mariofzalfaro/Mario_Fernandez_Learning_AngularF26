import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Pokemon as service} from '../services/pokemon';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-pokemon-form',
  styleUrl: './pokemon-form.css',
  templateUrl: './pokemon-form.html',
})
export class PokemonForm {
  private fb = inject(FormBuilder);
  pokeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    pokedexNumber: [1, [Validators.required]],
    type: ['Grass'],
    generation: [1],
    megaEvolution: [false]
  })

  private service = inject(service);

  onSubmit(): void {
    if (this.pokeForm.valid) {

      const newPokemon = this.pokeForm.getRawValue();

      this.service.addPokemon(newPokemon);

      this.pokeForm.reset({
        name: '',
        pokedexNumber: 1,
        type: 'Grass',
        generation: 1,
        megaEvolution: false
      });
    }
  }
}
