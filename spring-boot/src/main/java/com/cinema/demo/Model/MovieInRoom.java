package com.cinema.demo.Model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class MovieInRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    private Date showStartsAt;

    private double ticketPrice;

    @OneToMany(mappedBy = "movieInRoom")
    List<Reservation> reservations= new ArrayList<>();

    @ManyToOne
    private Room room;

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getShowStartsAt() {
        return showStartsAt;
    }

    public void setShowStartsAt(Date showStartsAt) {
        this.showStartsAt = showStartsAt;
    }

    public double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    @Override
    public String toString() {
        return "MovieInRoom{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", showStartsAt=" + showStartsAt +
                ", ticketPrice=" + ticketPrice +
                ", reservations=" + reservations +
                ", room=" + room +
                '}';
    }
}
