package com.cinema.demo.Controller;

import com.cinema.demo.DTO.NewMovieDTO;
import com.cinema.demo.Model.MovieInRoom;
import com.cinema.demo.Model.Room;
import com.cinema.demo.Services.MovieInRoomService;
import com.cinema.demo.Services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @Autowired
    private MovieInRoomService movieInRoomService;

    @GetMapping
    public List<Room> findAllRooms()
    {
        return roomService.findAll();
    }

    @PostMapping
    public Room safeNewRoom(@RequestBody Room room)
    {
        roomService.safeRoom(room);
        return room;
    }

    @GetMapping(value = "/{roomNumber}")
    public Room findByRoomNumver(@PathVariable("roomNumber") int roomNumber)
    {
        return roomService.findByRoomNumber(roomNumber);
    }
    @PostMapping("/addMovieToRoom")
    public void addMovieToRoom(@RequestBody NewMovieDTO newMovieDTO)
    {
        System.out.println(newMovieDTO);
        Room room = roomService.findByRoomNumber(newMovieDTO.getRoomNumber());
        MovieInRoom movie= new MovieInRoom();
        movie.setRoom(room);
        movie.setShowStartsAt(newMovieDTO.getDateTime());
        movie.setTitle(newMovieDTO.getMovieTitle());
        movieInRoomService.safe(movie);

    }
}
