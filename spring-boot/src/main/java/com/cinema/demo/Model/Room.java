package com.cinema.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int roomNumber;

    private int numberOfSeats;

    @OneToMany(mappedBy = "room")
    @JsonIgnore
    private List<MovieInRoom> moviesInRoom = new ArrayList<>();


    @OneToMany(fetch = FetchType.EAGER, mappedBy = "room")
    @JsonIgnore
    @OrderBy("seatNumber ASC")
    private List<Seat> seats = new ArrayList<>();

    public List<MovieInRoom> getMoviesInRoom() {
        return moviesInRoom;
    }

    public void setMoviesInRoom(List<MovieInRoom> moviesInRoom) {
        this.moviesInRoom = moviesInRoom;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(int numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }


    public List<Seat> getSeats() {
        return seats;
    }

    public void setSeats(List<Seat> seats) {
        this.seats = seats;
    }
}
