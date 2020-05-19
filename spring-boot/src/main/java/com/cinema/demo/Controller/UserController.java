package com.cinema.demo.Controller;

import com.cinema.demo.Model.User;
import com.cinema.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    UserService userService;

    @PostMapping(value = "")
    public void safeUser(@RequestBody User registeredUser)
    {
        System.out.println(registeredUser);
//       registeredUser.setPassword(encoder.encode(registeredUser.getPassword()));
//       return userService.safeUser(registeredUser);
    }
}
