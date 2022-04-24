package com.fmrm.wordle.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.fmrm.wordle.entities.Word;

public interface WordRepository extends JpaRepository<Word, Long> {

	@Query(nativeQuery= true, value = "SELECT * FROM TB_WORDS WHERE status = false")
	List<Word> findWordsSuggestions();
}
