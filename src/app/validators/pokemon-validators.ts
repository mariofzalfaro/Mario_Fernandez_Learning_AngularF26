import {AbstractControl, ValidationErrors} from '@angular/forms';

export function pokedexRange(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value < 1 || value > 1025) {
    return { pokedexOutOfRange: true };
  }
  return null;
}
