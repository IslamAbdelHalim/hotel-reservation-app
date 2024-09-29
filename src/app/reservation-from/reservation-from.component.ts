import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation/services/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrl: './reservation-from.component.css'
})
export class ReservationFromComponent {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router
  )  {}

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);
      this.router.navigate(['/list']);
    }
  }
}
