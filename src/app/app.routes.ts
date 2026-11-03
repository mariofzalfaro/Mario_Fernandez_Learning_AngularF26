import { Routes } from '@angular/router';
import {PokemonList} from './pokemon-list/pokemon-list';
import {PokemonDetail} from './pokemon-detail/pokemon-detail';

export const routes: Routes = [
  {path: '', redirectTo: 'pokemon', pathMatch:'full'},
  {path: 'pokemon', component: PokemonList},
  {path: 'pokemon/:id', component: PokemonDetail}
];
