package com.cinema.demo.Controller;

import com.cinema.demo.DTO.NewReservationDTO;
import com.cinema.demo.Model.Reservation;
import com.cinema.demo.Model.Seat;
import com.cinema.demo.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/seat")
public class SeatController {

    @Autowired
    MovieInRoomService movieInRoomService;

    @Autowired
    private RoomService roomService;

    @Autowired
    private SeatService seatService;

    @Autowired
    private UserService userService;

    @Autowired
    private ReservationService reservationService;

    @GetMapping(value={"/{seatId}"})
    public Seat findSeatById(@PathVariable("seatId") int seatId)
    {
        return seatService.findSeatById(seatId);
    }
    @GetMapping(value = "/byRoomNumber/{roomNumber}")
    public List<Seat> findSeatsByRoomNumber(@PathVariable("roomNumber") int roomNumber)
    {
        return  roomService.findByRoomNumber(roomNumber).getSeats();
    }

    @GetMapping(value = "/seatsForMovieIdentificator/{movieId}")
    public List<Seat> findByMovieId(@PathVariable("movieId") int movieId)
    {
        return movieInRoomService.findById(movieId).getRoom().getSeats();
    }

    @PostMapping(value="/reserveSeat")
    public void makeReservation(@RequestBody NewReservationDTO newReservationDTO) {
        for (Seat seat : newReservationDTO.getReservedSeat()) {
            Reservation reservation = new Reservation();
            reservation.setMovieInRoom(newReservationDTO.getMovieInRoom());
            reservation.setReservationDate(new Date());
            reservation.setSeat(seat);
            reservation.setSeatNumber(seat.getSeatNumber());
            reservation.setUser(userService.findOne(newReservationDTO.getUsername()));
            reservationService.safeReservation(reservation);
        }
    }
}
