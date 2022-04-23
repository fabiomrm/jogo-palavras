package com.fmrm.wordle.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmrm.wordle.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
	
}
