import { Route, Routes } from "react-router-dom";
import Projects from "./components/projects/projects";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
  );
}

export default App;
