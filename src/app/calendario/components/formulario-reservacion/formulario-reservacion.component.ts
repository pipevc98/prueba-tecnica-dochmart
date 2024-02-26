import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalendarioService } from '../../services/calendario-service.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResumenComponent } from '../resumen/resumen.component';

@Component({
  selector: 'app-formulario-reservacion',
  templateUrl: './formulario-reservacion.component.html',
  styleUrls: []
})
export class FormularioReservacionComponent implements OnInit {

  @Input() info: any;

  
  constructor( private fb: FormBuilder, private calendarioService: CalendarioService, private modalService: NgbModal ){}

  activeModal = inject(NgbActiveModal);
  
  //Get del input formulario
  getDate(){
    const fecha = this.reservaForm.get('date') as FormControl;
    return fecha;
  }


  //Formulario
  reservaForm: FormGroup = this.fb.group({
    nombre: ['user', [ Validators.required, Validators.minLength(3) ]],
    email: [ 'user@example.com', [ Validators.required, Validators.email ]],
    telefono: ['1234567890' , [ Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    date: ['', [ Validators.required ]],
    title: ['reservado']
  })

  ngOnInit(): void {
    this.getDate().setValue(this.info.dateStr);
  }

  


  onSubmit(){
    const modalRef = this.modalService.open(ResumenComponent);
		modalRef.componentInstance.info = this.reservaForm.value;

    this.calendarioService.postReservacion( this.reservaForm.value ).subscribe();
    this.reservaForm.reset();
  }


}
