import { Component, Input, OnInit, inject } from '@angular/core';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: []
})
export class ResumenComponent implements OnInit {

  @Input() info: any; 

  ngOnInit(): void {
      console.log(this.info)
  }

  onReload() {
    window.location.reload()
  }

}
