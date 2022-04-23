package com.fmrm.wordle.dto;

import java.util.HashSet;
import java.util.Set;

import com.fmrm.wordle.entities.User;

public class UserDTO {

	private Long id;

	private String email;

	Set<RoleDTO> roles = new HashSet<>();

	public UserDTO() {
	}

	public UserDTO(Long id, String email) {
		this.id = id;
		this.email = email;
	}
	
	public UserDTO(User entity) {
		this.id = entity.getId();
		this.email = entity.getEmail();
		entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<RoleDTO> getRoles() {
		return roles;
	}

}
