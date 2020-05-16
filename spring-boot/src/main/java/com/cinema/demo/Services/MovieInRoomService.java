package com.cinema.demo.Services;

import com.cinema.demo.Model.MovieInRoom;

import java.util.List;

public interface MovieInRoomService {

    MovieInRoom safe(MovieInRoom movieInRoom);
    List<MovieInRoom> findAll();
}
