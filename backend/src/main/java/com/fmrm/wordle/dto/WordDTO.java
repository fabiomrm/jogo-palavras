package com.fmrm.wordle.dto;

import java.util.Objects;

import com.fmrm.wordle.entities.Word;

public class WordDTO {

	private Long id;
	private String name;

	public WordDTO() {

	}

	public WordDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public WordDTO(Word entity) {
		id = entity.getId();
		name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WordDTO other = (WordDTO) obj;
		return Objects.equals(id, other.id) && Objects.equals(name, other.name);
	}

}
