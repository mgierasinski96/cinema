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

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(double ticketPrice) {
        this.ticketPrice = ticketPrice;
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
