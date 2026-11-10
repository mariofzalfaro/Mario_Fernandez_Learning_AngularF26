import {Component, inject, signal} from '@angular/core';
import { Pokemon } from './shared/models/pokemon';
import {PokemonList} from './pokemon-list/pokemon-list';
import {RouterOutlet} from '@angular/router';
import {ToggleGuard} from './services/toggle-guard';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  toggleGuard = inject(ToggleGuard);
  protected readonly title = signal('My First app');

  student: {name:string} & {id:string} =
    {
      name: 'Mario',
      id:'0887177'
    };

  course: {name:string} & {code:string} =
    {
      name:'Java Frameworks',
      code:'MAD307'
    };

}


