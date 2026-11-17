import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  message = signal<string | null>(null);

  clear(): void {
    this.message.set(null);
  }
}
