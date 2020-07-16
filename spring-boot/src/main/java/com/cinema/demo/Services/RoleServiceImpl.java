package com.cinema.demo.Services;

import com.cinema.demo.DAO.RoleRepository;
import com.cinema.demo.Model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    RoleRepository roleRepository;
    @Override
    public Role findByRoleId(long roleId) {
        return roleRepository.findById(roleId);
    }
}
