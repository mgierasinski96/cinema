package com.cinema.demo.Services;

import com.cinema.demo.Model.Reservation;

public interface ReservationService {
    Reservation safeReservation(Reservation reservation);
}
