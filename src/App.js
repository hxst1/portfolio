import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
     <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<HomePage />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
  );
}

export default App;
