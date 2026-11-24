import {effect, Service, signal} from '@angular/core';

@Service()
export class SavedService {
  private storageKey = 'pokemonApp.saved';
  private savedIds = signal<Number[]>(this.load());
  saved = this.savedIds.asReadonly();
  private sortKey = 'pokemonApp.sortOder';
  sortOrder = signal<string>(this.loadSortOrder());

  constructor() {
    effect(() => {
      try { localStorage.setItem(this.storageKey, JSON.stringify(this.savedIds())); }
      catch {}
    });
  effect (() => {
    try { localStorage.setItem(this.sortKey, this.sortOrder());
    } catch {}
    });
  }


  toggle(id: number): void {
    this.savedIds.update(ids =>
      ids.includes(id) ? ids.filter(savedId => savedId !== id) : [...ids, id]
    );
  }

  isSaved(id: number): boolean {
    return this.savedIds().includes(id);
  }

  private load(): Number[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
    } catch {
      return [];
    }
  }

  private loadSortOrder(): string {
    try {
      return localStorage.getItem(this.sortKey) ?? 'number';
    } catch {
      return 'number';
    }
  }
}
