import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToggleGuard {
  guardEnabled = signal(true)
  toggleGuard(): void {
    this.guardEnabled.update(value => !value);
  }

}
