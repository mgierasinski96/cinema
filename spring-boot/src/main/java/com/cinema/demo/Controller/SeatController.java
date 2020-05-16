package com.cinema.demo.Controller;

import com.cinema.demo.Model.Seat;
import com.cinema.demo.Services.RoomService;
import com.cinema.demo.Services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/seat")
public class SeatController {

    @Autowired
    private RoomService roomService;

    @Autowired
    private SeatService seatService;

    @GetMapping(value = "/byRoomNumber/{roomNumber}")
    public List<Seat> findSeatsByRoomNumber(@PathVariable("roomNumber") int roomNumber)
    {
        return  roomService.findByRoomNumber(roomNumber).getSeats();
    }
}