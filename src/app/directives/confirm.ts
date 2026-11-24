import {Directive, input, output} from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)' : 'ask()',
  }
})
export class Confirm {
  question = input('', {alias: 'appConfirm'});
  confirmed = output<void>();

  ask(): void {
    if(confirm(this.question())) {
      this.confirmed.emit();
    }
  }
}
