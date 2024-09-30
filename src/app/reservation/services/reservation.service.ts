import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private urlAPI = 'http://localhost:3000/reservations';

  reservations: Reservation[] = [];

  constructor(private http: HttpClient){}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.urlAPI)
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.urlAPI}/${id}`);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.http.post(this.urlAPI, reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.urlAPI}/${id}`);
  }

  updateReservation(id:string, reservation: Reservation): void {
    this.http.patch(`${this.urlAPI}/${id}`, reservation);
  }
}
