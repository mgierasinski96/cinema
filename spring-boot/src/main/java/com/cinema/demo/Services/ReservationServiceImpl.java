package com.cinema.demo.Services;

import com.cinema.demo.DAO.ReservationRepository;
import com.cinema.demo.Model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationServiceImpl implements ReservationService {
    @Autowired
    ReservationRepository reservationRepository;
    @Override
    public Reservation safeReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
}
