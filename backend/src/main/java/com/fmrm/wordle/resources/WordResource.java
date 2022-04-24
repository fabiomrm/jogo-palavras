package com.fmrm.wordle.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fmrm.wordle.dto.WordDTO;
import com.fmrm.wordle.services.WordService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/words")
public class WordResource {

	@Autowired
	private WordService service;

	@GetMapping
	public ResponseEntity<List<WordDTO>> findAll() {
		List<WordDTO> list = service.findAll();

		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/suggestions")
	public ResponseEntity<List<WordDTO>> findWordsSuggestions() {
		List<WordDTO> list = service.findWordsSuggestions();
		
		return ResponseEntity.ok().body(list);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<WordDTO> findById(@PathVariable Long id) {
		WordDTO obj = service.findById(id);

		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<WordDTO> insert(@RequestBody WordDTO dto) {
		dto = service.insert(dto);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();

		return ResponseEntity.created(uri).body(dto);
	}

}
