package com.cinema.demo.DAO;

import com.cinema.demo.Model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface RoomRepository extends JpaRepository<Room, Long> {

    Room findByRoomNumber(int roomNumber);
    List<Room> findAllByOrderByRoomNumberAsc();
}


