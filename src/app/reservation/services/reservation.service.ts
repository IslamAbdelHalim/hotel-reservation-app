import { Injectable } from '@angular/core';
import { Reservation } from '../../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservations: Reservation[] = [];

  constructor() { 
    const savedReservation = localStorage.getItem("reservations");
    this.reservations = savedReservation ? JSON.parse(savedReservation) : [];
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    const index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(reservation: Reservation): void {
    const index = this.reservations.findIndex(res => res.id === reservation.id);
    this.reservations[index] = reservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
