import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './shared/models/pokemon';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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

  pokemonTeam: Pokemon[] = [
    {
      name: 'Venusaur',
      pokedexNumber: 3,
      type: 'Grass',
      generation: 1,
      megaEvolution: true
    },
    {
      name: 'Arcanine',
      pokedexNumber: 59,
      type: 'Fire',
      generation: 1
    },
    {
      name: 'Rhyperior',
      pokedexNumber: 464,
      type: 'Ground',
      generation: 4
    },
    {
      name: 'Gyarados',
      pokedexNumber: 130,
      type: 'Water',
      generation: 1,
      megaEvolution: true
    },
    {
      name: 'Gengar',
      pokedexNumber: 94,
      type: 'Ghost',
      generation: 1,
      megaEvolution: true
    },
    {
      name: 'Raichu',
      pokedexNumber: 26,
      type: 'Electric',
      generation: 1
    }
  ]

}


