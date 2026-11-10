import { AbstractControl, ValidationErrors } from '@angular/forms';

export function pokedexMatchesGeneration(group: AbstractControl): ValidationErrors | null {
  const pokedex = group.get('pokedexNumber')?.value;
  const generation = group.get('generation')?.value;
  if (pokedex == null) {
    return null;
  }

  const valid =
    (generation === 1 && pokedex >= 1 && pokedex <= 151) ||
    (generation === 2 && pokedex >= 152 && pokedex <= 251) ||
    (generation === 3 && pokedex >= 252 && pokedex <= 386) ||
    (generation === 4 && pokedex >= 387 && pokedex <= 493) ||
    (generation === 5 && pokedex >= 494 && pokedex <= 649) ||
    (generation === 6 && pokedex >= 650 && pokedex <= 721) ||
    (generation === 7 && pokedex >= 722 && pokedex <= 809) ||
    (generation === 8 && pokedex >= 810 && pokedex <= 905) ||
    (generation === 9 && pokedex >= 906 && pokedex <= 1025);

  return valid ? null : { pokedexOutOfGeneration: true };

}
