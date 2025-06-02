import React, { useState } from "react";
import { createNote } from "../services/noteService";
import { useNavigate } from "react-router-dom";

export default function NoteForm() {
  const [note, setNote] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = e => setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await createNote(note);
    navigate("/");
  };

   const containerStyle = {
    maxWidth: "700px",
    marginTop: "2rem",
    padding: "2rem",
    borderRadius: "12px",
    background: "linear-gradient(to bottom,rgb(37, 99, 143) 0%, #ffffff)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div className="container mt-4">
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" className="form-control mb-2" placeholder="Title" onChange={handleChange} required />
        <textarea name="content" className="form-control mb-2" placeholder="Content" onChange={handleChange} required style={{ minHeight: "120px", resize: "vertical" }}/>
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
