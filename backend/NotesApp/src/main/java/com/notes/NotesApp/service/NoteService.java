package com.notes.NotesApp.service;

import com.notes.NotesApp.model.Note;
import com.notes.NotesApp.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    @Autowired
    private NoteRepository repo;

    public Note save(Note note) { return repo.save(note); }

    public List<Note> getAll() { return repo.findAll(); }

    public Note getById(Long id) { return repo.findById(id).orElse(null); }

    public Note update(Long id, Note newNote) {
        Note existing = repo.findById(id).orElseThrow();
        existing.setTitle(newNote.getTitle());
        existing.setContent(newNote.getContent());
        return repo.save(existing);
    }

    public void delete(Long id) { repo.deleteById(id); }
}
