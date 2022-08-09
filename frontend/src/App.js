import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import ProjectsPage from "./pages/ProjectsPage";
import Projects from "./pages/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
