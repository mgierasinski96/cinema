package com.cinema.demo.Controller;

import com.cinema.demo.Model.Reservation;
import com.cinema.demo.Model.Seat;
import com.cinema.demo.Model.User;
import com.cinema.demo.Services.ReservationService;
import com.cinema.demo.Services.RoleService;
import com.cinema.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @Autowired
    ReservationService reservationService;

    @PostMapping(value = "/register")
    public User safeUser(@RequestBody User registeredUser)
    {
       registeredUser.setPassword(encoder.encode(registeredUser.getPassword()));
       registeredUser.setUserRole(roleService.findByRoleId(1));
      return userService.safeUser(registeredUser);
    }

    @GetMapping(value = "")
    @PreAuthorize("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
    public List<User> getAllUsers()
    {
        return userService.findAll();
    }


    @GetMapping(value = "/remove/{username}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteUser(@PathVariable("username") String username)
    {  User user=userService.findOne(username);
        for(Reservation res: user.getReservations())
        {
            reservationService.removeReservation(res);
        }
        userService.removeUser(user);

    }

    @GetMapping(value = "/{username}")
    @PreAuthorize("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
    public User getUserByUsername(@PathVariable("username") String username)
    {
        return userService.findOne(username);
    }
    @GetMapping(value = "/getReservedSeats/{username}")
    public List<Reservation> getReservationsForUsername(@PathVariable("username") String username)
    {
        return userService.findOne(username).getReservations();
    }
}
