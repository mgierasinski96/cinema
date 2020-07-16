package com.cinema.demo.DAO;

import com.cinema.demo.Model.Reservation;
import com.cinema.demo.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findById(long roleId);
}
