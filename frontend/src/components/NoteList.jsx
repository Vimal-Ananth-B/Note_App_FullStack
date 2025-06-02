import React, { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../services/noteService";
import { useNavigate } from "react-router-dom";

export default function NoteList() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await deleteNote(id);
      fetchNotes();
    }
  };

  const containerStyle = {
    maxWidth: "700px",
   background: "linear-gradient(to bottom,rgb(23, 74, 110) 0%, #ffffff)",
    padding: "2rem",
    marginTop: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const cardStyle = {
    borderLeft: "6px solid #0d6efd",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    boxShadow: "0 0 8px rgba(0,0,0,0.05)",
  };

  const headingStyle = { marginBottom: "1.5rem", fontWeight: "800", color: "#fff" };

  const btnStyle = {
    marginRight: "0.5rem",
    fontWeight: "500",
    padding: "6px 14px",
  };

  return (
    <div className="container mt-4" style={containerStyle}>
      <h2 style={headingStyle}>Notes</h2>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/add")} style={{...btnStyle}}>Add Note</button>
      {notes.map(note => (
        <div key={note.id} className="card mb-2" style={cardStyle}>
          <div className="card-body">
            <h5 style={{fontWeight : "600"}}>{note.title}</h5>
            <p>{note.content}</p>
            <button className="btn btn-warning me-2" onClick={() => navigate(`/edit/${note.id}`)} style={btnStyle}>Edit</button>
            <button className="btn btn-danger" onClick={() => handleDelete(note.id)} style={btnStyle}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
