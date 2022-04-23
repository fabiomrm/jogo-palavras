package com.fmrm.wordle.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fmrm.wordle.dto.RoleDTO;
import com.fmrm.wordle.dto.UserDTO;
import com.fmrm.wordle.dto.UserInsertDTO;
import com.fmrm.wordle.entities.Role;
import com.fmrm.wordle.entities.User;
import com.fmrm.wordle.repositories.RoleRepository;
import com.fmrm.wordle.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {
	private static Logger logger = LoggerFactory.getLogger(UserService.class);
	@Autowired
	private UserRepository repository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		entity.setEmail(dto.getEmail());
		entity.getRoles().clear();
		
		for(RoleDTO roleDTO : dto.getRoles()) {
			Role role = roleRepository.getById(roleDTO.getId());
			entity.getRoles().add(role);
		}
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);

		return new UserDTO(entity);

	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByEmail(username);
		if (user == null) {

			logger.error("User not found: " + username);
			throw new UsernameNotFoundException("Email not found");
		}
		logger.info("User found: " + username);
		return user;
	}

}
