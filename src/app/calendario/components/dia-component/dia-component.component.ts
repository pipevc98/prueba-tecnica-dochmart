import { Component, Input, OnInit, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dia-component',
  templateUrl: './dia-component.component.html',
  styleUrls: []
})
export class DiaComponentComponent {
  activeModal = inject(NgbActiveModal);
  @Input() info: any


  
}
