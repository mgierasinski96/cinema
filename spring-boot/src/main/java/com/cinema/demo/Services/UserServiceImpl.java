package com.cinema.demo.Services;

import com.cinema.demo.DAO.UserRepository;
import com.cinema.demo.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User safeUser(User user) {
        return userRepository.save(user);
    }
}
