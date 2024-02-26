import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  {
    path: 'calendario',
    loadChildren: () => import( './calendario/calendario.module' ).then( m => m.CalendarioModule )
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'calendario'
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
