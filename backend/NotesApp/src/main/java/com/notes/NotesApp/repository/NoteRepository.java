package com.notes.NotesApp.repository;

import com.notes.NotesApp.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {}

