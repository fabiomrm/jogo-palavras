package com.fmrm.wordle.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fmrm.wordle.dto.WordDTO;
import com.fmrm.wordle.entities.Word;
import com.fmrm.wordle.repositories.WordRepository;
import com.fmrm.wordle.services.exceptions.ResourceNotFoundException;

@Service
public class WordService {

	@Autowired
	private WordRepository repository;
	
	
	@Transactional(readOnly = true)
	public List<WordDTO> findAll() {
		List<Word> list = repository.findAll();
		
		return list.stream().map(x -> new WordDTO(x)).collect(Collectors.toList());
		
	}

	@Transactional(readOnly = true)
	public WordDTO findById(Long id) {
		Optional<Word> obj = repository.findById(id);
		
		Word entity = obj.orElseThrow(() -> new ResourceNotFoundException("Palavra não enconrada."));
		
		return new WordDTO(entity);
	}
}
