package com.cinema.demo.DAO;

import com.cinema.demo.Model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface SeatRepository extends JpaRepository<Seat, Long> {
}
