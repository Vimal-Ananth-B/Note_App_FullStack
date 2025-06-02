import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import EditNote from "./components/EditNote";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoteList />} />
        <Route path="/add" element={<NoteForm />} />
        <Route path="/edit/:id" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
