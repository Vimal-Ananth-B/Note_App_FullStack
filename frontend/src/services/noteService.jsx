import axios from "axios";

const auth = {
  username: 'user',
  password: 'password'
};

const API_URL = "http://localhost:8080/notes";

export const getNotes = () => axios.get(API_URL, { auth });

export const getNote = (id) => axios.get(`${API_URL}/${id}`, { auth });

export const createNote = (note) => axios.post(API_URL, note, { auth });

export const updateNote = (id, note) => axios.put(`${API_URL}/${id}`, note, { auth });

export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`, { auth });
