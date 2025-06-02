package com.notes.NotesApp.controller;

import com.notes.NotesApp.model.Note;
import com.notes.NotesApp.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
@CrossOrigin(origins = "http://localhost:5174")
public class NoteController {
    @Autowired
    private NoteService service;

    @PostMapping
    public Note create(@RequestBody Note note) { return service.save(note); }

    @GetMapping
    public List<Note> getAll() { return service.getAll(); }

    @GetMapping("/{id}")
    public Note get(@PathVariable Long id) { return service.getById(id); }

    @PutMapping("/{id}")
    public Note update(@PathVariable Long id, @RequestBody Note note) {
        return service.update(id, note);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok().build();
    }
}

