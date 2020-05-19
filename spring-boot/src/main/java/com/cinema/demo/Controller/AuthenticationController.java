package com.cinema.demo.Controller;

import com.cinema.demo.Model.LoginUser;
import com.cinema.demo.Model.Token;
import com.cinema.demo.Model.User;
import com.cinema.demo.Services.UserService;
import com.cinema.demo.config.JwtToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/token")
public class AuthenticationController {

    @Autowired
    private JwtToken jwtToken;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public LoginUser register(@RequestBody LoginUser loginUser) {
        final User user = userService.findOne(loginUser.getUsername());
        final String token = jwtToken.generateToken(user);
        LoginUser userLogged = new LoginUser();
        userLogged.setToken(new Token(token));
        userLogged.setUsername(user.getUsername());
        return userLogged;
    }

}
