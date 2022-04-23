package com.fmrm.wordle.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fmrm.wordle.dto.WordDTO;
import com.fmrm.wordle.services.WordService;

@RestController
@RequestMapping(value = "/words")
public class WordResource {

	@Autowired
	private WordService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<WordDTO> findById(@PathVariable Long id) {
		WordDTO obj = service.findById(id);
		
		return ResponseEntity.ok().body(obj);
	}

}
