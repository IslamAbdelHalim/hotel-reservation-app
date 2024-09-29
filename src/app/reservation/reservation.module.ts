import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationFromComponent } from '../reservation-from/reservation-from.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';



@NgModule({
  declarations: [
    ReservationFromComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
