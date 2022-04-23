package com.fmrm.wordle.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmrm.wordle.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {


}
