import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentacaoesNewComponent } from './components/movimentacao-new/movimentacao-new.component';
import { MovimentacaoesListComponent } from './components/movimentacao-list/movimentacao-list.component';

const routes: Routes = [
  { path: 'movimentacoes-new', component: MovimentacaoesNewComponent },
  { path: 'movimentacoes', component: MovimentacaoesListComponent },
  { path: '', redirectTo: 'movimentacoes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
