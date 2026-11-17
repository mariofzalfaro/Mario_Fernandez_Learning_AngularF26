import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generation',
})
export class GenerationPipe implements PipeTransform {
  transform(id: number | null | undefined, format: string = 'long'): string {
    let numeral = '';

    if (!id || id < 1) {
      return 'Unknown generation';
    } else if (id <= 151) {
      numeral = 'I';
    } else if (id <= 251) {
      numeral = 'II';
    } else if (id <= 386) {
      numeral = 'III';
    } else if (id <= 493) {
      numeral = 'IV';
    } else if (id <= 649) {
      numeral = 'V';
    } else if (id <= 721) {
      numeral = 'VI';
    } else if (id <= 809) {
      numeral = 'VII';
    } else if (id <= 905) {
      numeral = 'VIII';
    } else if (id <= 1025) {
      numeral = 'IX';
    } else {
      return 'Unknown generation';
    }

    return format === 'short' ? `Gen ${numeral}` : `Generation ${numeral}`;
  }
}
