package com.cinema.demo.Services;

import com.cinema.demo.DAO.RoomRepository;
import com.cinema.demo.Model.Room;
import com.cinema.demo.Model.Seat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private SeatService seatService;
    @Override
    public List<Room> findAll() {
        return roomRepository.findAllByOrderByRoomNumberAsc();
    }

    @Override
    public void safeRoom(Room room) {
        roomRepository.save(room);
        for(int seatNumber=1;seatNumber<=room.getNumberOfSeats();seatNumber++)
        {
            Seat seat= new Seat();
            seat.setRoom(room);
            seat.setSeatNumber(seatNumber);
            seatService.safeSeat(seat);
        }
    }

    @Override
    public Room findByRoomNumber(int roomNumber) {
        return roomRepository.findByRoomNumber(roomNumber);
    }
}
