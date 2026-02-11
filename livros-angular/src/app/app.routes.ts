import { Routes } from '@angular/router';
import { LivroLista } from './livro-lista/livro-lista';
import { LivroDados } from './livro-dados/livro-dados';

export const routes: Routes = [
  { path: 'lista', component: LivroLista },
  { path: 'dados', component: LivroDados },
  { path: '', redirectTo: 'lista', pathMatch: 'full' }
];
