import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/services/reservation.service';
import { consumerMarkDirty } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.reservationService.getReservations().subscribe((reservations) => this.reservations = reservations);
  }

  delete(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      const index = this.reservations.findIndex(re => re.id === id)
      this.reservations.splice(index, 1);
    })
  }

}
