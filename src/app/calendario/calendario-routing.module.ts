import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ReservacionesPageComponent } from './pages/reservaciones-page/reservaciones-page.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'reservaciones', component: ReservacionesPageComponent },
      { path: '', pathMatch: 'full', redirectTo: 'reservaciones' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
