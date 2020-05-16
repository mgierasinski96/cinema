package com.cinema.demo.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class MovieInRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    private Date showStartsAt;

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
}
