import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservaciones } from '../interfaces/reservaciones';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {

  private readonly baseUrl: string = 'http://localhost:3000'

  constructor( private http: HttpClient ) { }

  getReservaciones() {
    const url = `${this.baseUrl}/reservacion`;
    try {
      const res =  this.http.get<Reservaciones>( url );
      return res;
    } catch (error) {
      throw new Error('error al enviar la reservacion');
    }
  }

  postReservacion( body: Reservaciones ) {
    const url = `${this.baseUrl}/reservacion`;
    try {
      const res = this.http.post<Reservaciones>( url, body );
      return res;
    } catch (error) {
      throw new Error('error al enviar la reservacion');
    }
  }


  deleteReservacion( id: number ) {
    const url = `${this.baseUrl}/reservacion/${id}`;

    try {
      const res = this.http.delete(url)
      return res;
    } catch (error) {
      throw new Error('error al enviar la reservacion');
    }
  }

}
