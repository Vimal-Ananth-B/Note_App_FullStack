import React, { useEffect, useState } from "react";
import { getNote, updateNote } from "../services/noteService";
import { useNavigate, useParams } from "react-router-dom";

export default function EditNote() {
  const [note, setNote] = useState({ title: "", content: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id).then(res => setNote(res.data));
  }, [id]);

  const handleChange = e => setNote({ ...note, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await updateNote(id, note);
    navigate("/");
  };

  const containerStyle = {
    maxWidth: "700px",
    marginTop: "2rem",
    padding: "2rem",
    borderRadius: "12px",
    background: "linear-gradient(to bottom,rgb(32, 94, 138) 0%, #ffffff)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div className="container mt-4" style={containerStyle}>
      <h2 style={{color:'white'}}>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" className="form-control mb-2" value={note.title} onChange={handleChange} placeholder="Title"
          required/>
        <textarea name="content" className="form-control mb-2" value={note.content} onChange={handleChange} placeholder="Content"
          required
          style={{ minHeight: "120px", resize: "vertical" }}/>
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
}
