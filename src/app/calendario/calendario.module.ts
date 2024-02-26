import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing.module';
import { ReservacionesPageComponent } from './pages/reservaciones-page/reservaciones-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DiaComponentComponent } from './components/dia-component/dia-component.component';
import { FormularioReservacionComponent } from './components/formulario-reservacion/formulario-reservacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  infoComponent } from './components/info/info.component';
import { ResumenComponent } from './components/resumen/resumen.component';




@NgModule({
  declarations: [
    ReservacionesPageComponent,
    LayoutPageComponent,
    CalendarioComponent,
    DiaComponentComponent,
    FormularioReservacionComponent,
    infoComponent,
    ResumenComponent
  ],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    FullCalendarModule, 
    ReactiveFormsModule
  ]
})
export class CalendarioModule { }
