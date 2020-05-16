package com.cinema.demo.Services;

import com.cinema.demo.Model.User;

import java.util.List;

public interface UserService {

    List<User> findAll();
    User safeUser(User user);
}
