package com.cinema.demo.DAO;

import com.cinema.demo.Model.MovieInRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface MovieInRoomRepository extends JpaRepository<MovieInRoom, Long> {

    List<MovieInRoom> findAllByOrderByShowStartsAtAsc();
    MovieInRoom findById(int id);
}
