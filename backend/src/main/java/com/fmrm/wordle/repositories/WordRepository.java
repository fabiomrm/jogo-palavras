package com.fmrm.wordle.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmrm.wordle.entities.Word;

public interface WordRepository extends JpaRepository<Word, Long>{

}
