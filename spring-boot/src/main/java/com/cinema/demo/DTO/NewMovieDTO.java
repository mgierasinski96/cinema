package com.cinema.demo.DTO;

import java.util.Date;

public class NewMovieDTO {
    private Date dateTime;
    private String movieTitle;
    private int roomNumber;
    private double ticketPrice;



    public Date getDateTime() {
        return dateTime;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public double getTicketPrice() {
        return ticketPrice;
    }

    @Override
    public String toString() {
        return "NewMovieDTO{" +
                "dateTime=" + dateTime +
                ", movieTitle='" + movieTitle + '\'' +
                ", roomNumber=" + roomNumber +
                '}';
    }
}
