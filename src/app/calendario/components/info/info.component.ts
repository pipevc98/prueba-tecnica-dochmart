import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarioService } from '../../services/calendario-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: []
})
export class infoComponent implements OnInit {
  activeModal = inject(NgbActiveModal);

  constructor( private calendarioService: CalendarioService ){}
  @Input() info: any

  ngOnInit(): void {
    console.log(this.info)
  }

  onDeleteReserva(id: number){
    
    this.calendarioService.deleteReservacion(id).subscribe();
    
    window.location.reload()
  }

}
