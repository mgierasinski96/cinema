package com.cinema.demo.Services;

import com.cinema.demo.DAO.SeatRepository;
import com.cinema.demo.Model.Seat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatServiceImpl implements SeatService {

    @Autowired
    private SeatRepository seatRepository;
    @Override
    public Seat safeSeat(Seat seat) {
        return seatRepository.save(seat);
    }

    @Override
    public Seat findSeatById(int id) {
        return seatRepository.findById(id);
    }
}
