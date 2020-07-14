package com.cinema.demo.DTO;

import com.cinema.demo.Model.MovieInRoom;
import com.cinema.demo.Model.Seat;

import java.util.List;

public class NewReservationDTO {

    private List<Seat> reservedSeat;
    private String username;
    private MovieInRoom movieInRoom;
    private int seatNumber;

    public int getSeatNumber() {
        return seatNumber;
    }

    public List<Seat> getReservedSeat() {
        return reservedSeat;
    }

    public String getUsername() {
        return username;
    }

    public MovieInRoom getMovieInRoom() {
        return movieInRoom;
    }


    @Override
    public String toString() {
        return "NewReservationDTO{" +
                "reservedSeat=" + reservedSeat +
                ", username='" + username + '\'' +
                ", movieInRoom=" + movieInRoom +
                '}';
    }
}
