import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { CalendarioService } from '../../services/calendario-service.service';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiaComponentComponent } from '../dia-component/dia-component.component';

import { CalendarOptions, DayCellContentArg } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'

import { infoComponent } from '../info/info.component';
import { reduce, throwIfEmpty } from 'rxjs';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styles: []
})
export class CalendarioComponent implements OnInit{

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  constructor( private calendarioService: CalendarioService, private modalService: NgbModal) {
  }

  //Inicializar los datos de la api
  ngOnInit(): void {
    this.getReservaciones();  
  }


  //funcion para hacer el get a la api
  getReservaciones () {
    this.calendarioService.getReservaciones().subscribe( ( reservaciones: any ) => {
      // Asignarle los valores al calendario
      const events = reservaciones.map( ( data:any ) => ({
        id: data.id,
        title: data.title.toUpperCase(),
        telefono: data.telefono,
        nombre: data.nombre,
        email: data.email,
        date: data.date,
        groupById: data.date.slice(0, 10),
        allDay: false,
      }));
      this.calendarOptions.events = events
    });
  }

  //Abrir fromulario para agregar nueva reserva
  openFormReserva(info: any) {
		const modalRef = this.modalService.open(DiaComponentComponent);
		modalRef.componentInstance.info = info;
	}
  //cambiar la vista al hacer click en el día
  onShowDay( info: any ){
    const clickedDate = info.date;
    this.calendarComponent.getApi().changeView('timeGridDay', clickedDate);
  }
  //Abrir el fromulario para hacer una reservacion
  onShowReserva( arg: any) {
    const modalRef = this.modalService.open(infoComponent);
		modalRef.componentInstance.info = arg;
  }
  // Cambiar de color segun si hay fechas disponibles o no
  fechasDisplonibles( info: DayCellContentArg ) {

  

    const things = this.calendarOptions.dayCellDidMount = (info) => {

      const fecha = info.date;

      // console.log(fecha)

      const eventosDelDia = this.calendarComponent.getApi().getEvents().filter( (evento: any) => {
        
        return evento.start!.toDateString() === fecha.toDateString();
        
      });

      console.log(eventosDelDia)

      var stuff = ''
    
      if(eventosDelDia.length > 11 ) {
        stuff =  'fc-day1'
      } else {
        stuff = 'fc-day'
      }

      // console.log(stuff)
      return stuff

    }

    // 

    console.log(things)
    
    
    
    
  }

  //Configuaracion del calendario
  calendarOptions: CalendarOptions = ({
    plugins: [
      dayGridPlugin, 
      interactionPlugin, 
      listPlugin, 
      timeGridPlugin,
      bootstrap5Plugin 
    ],
    themeSystem: 'bootstrap5',
    initialView: 'dayGridMonth',

    initialDate: "2024-09-01",
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    dayCellDidMount: (info) => this.fechasDisplonibles(info),
    weekends: true,
    dayMaxEvents: 0,
    eventClick: this.onShowReserva.bind(this),
    navLinks: true,
    editable: true,
    locale: esLocale,
    slotDuration: '01:00:00',
    slotLabelFormat: { hour: 'numeric', minute: '2-digit', omitZeroMinute: false, meridiem: 'short' },
    eventBackgroundColor: '#F78181', 
    eventBorderColor: '#F78181',
    businessHours: { startTime: '07:00', endTime: '18:00', daysOfWeek:[ 0, 1, 2, 3, 4, 5, 6 ]},
    slotMinTime: '07:00:00',
    slotMaxTime: '19:00:00',
    allDaySlot: false,
    eventMaxStack: 1,
    views: {
      timeGridDay: {
        plugins: [interactionPlugin, timeGridPlugin],
        dateClick: this.openFormReserva.bind(this),
        eventClick: this.onShowReserva.bind(this),
        selectOverlap: false,
        contentHeight:328,
        
      },
      dayGridMonth: {
        dateClick: this.onShowDay.bind(this),
      },

    },
  });
  
}
