import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationService } from '../reservation/services/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrl: './reservation-from.component.css'
})
export class ReservationFromComponent {
  reservationForm: FormGroup = new FormGroup({});
  text: string = 'Submit';

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activateRoute: ActivatedRoute
  )  {}

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });

    // To get Id from url 
    //1)
    // let id = this.router.url.split('/')[2];
    // 2
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservation(id).subscribe((reservation) => {
        this.reservationForm.patchValue(reservation);
      })
      this.text = 'Update';
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      const id = this.activateRoute.snapshot.paramMap.get('id');
      if (id) {
        this.reservationService.updateReservation(id, reservation)
      } else {
        this.reservationService.addReservation(reservation);
      }
      this.router.navigate(['/list']);
    }
  }
}
