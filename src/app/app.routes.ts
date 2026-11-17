import { Routes } from '@angular/router';
import {PokemonList} from './pokemon-list/pokemon-list';
import {PokemonDetail} from './pokemon-detail/pokemon-detail';
import {PokemonForm} from './pokemon-form/pokemon-form';
import {editGuard} from './guards/edit-guard';

export const routes: Routes = [
  {path: '', redirectTo: 'pokemon', pathMatch:'full'},
  {path: 'pokemon', component: PokemonList},
  {path: 'pokemon/add', loadComponent: () => import('./pokemon-form/pokemon-form').then(m => m.PokemonForm)},
  {path: 'pokemon/edit/:id', loadComponent: () => import('./pokemon-form/pokemon-form').then(m => m.PokemonForm),
  canActivate: [editGuard],
  },
  {path: 'pokemon/:id', loadComponent: () => import('./pokemon-detail/pokemon-detail').then(m => m.PokemonDetail)},
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound),
  }
];
