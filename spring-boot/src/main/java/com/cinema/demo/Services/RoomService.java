package com.cinema.demo.Services;

import com.cinema.demo.Model.Room;

import java.util.List;

public interface RoomService {

    List<Room> findAll();
    void safeRoom(Room room);
    Room findByRoomNumber(int roomNumber);
}
