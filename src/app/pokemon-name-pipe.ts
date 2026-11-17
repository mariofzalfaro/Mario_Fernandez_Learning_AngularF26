import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
})
export class PokemonNamePipe implements PipeTransform {
  transform(name: string | null | undefined): string {
    if (!name) {
      return '';
    }
    return name.replace(/-/g, '');
  }
}
