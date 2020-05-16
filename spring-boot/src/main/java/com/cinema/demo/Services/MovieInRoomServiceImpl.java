package com.cinema.demo.Services;

import com.cinema.demo.DAO.MovieInRoomRepository;
import com.cinema.demo.Model.MovieInRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieInRoomServiceImpl implements MovieInRoomService {

    @Autowired
    MovieInRoomRepository movieInRoomRepository;

    @Override
    public MovieInRoom safe(MovieInRoom movieInRoom) {
        return movieInRoomRepository.save(movieInRoom);
    }

    @Override
    public List<MovieInRoom> findAll() {
        return movieInRoomRepository.findAll();
    }
}
