package com.cinema.demo.Services;

import com.cinema.demo.Model.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface UserService {

    List<User> findAll();
    User safeUser(User user);
    User findOne(String username);
    UserDetails loadUserByUsername(String username);
    List<SimpleGrantedAuthority> getAuthority();
    void removeUser(User user);
}
