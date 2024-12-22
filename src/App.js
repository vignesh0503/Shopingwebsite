import "./App.css";
import Homesection from "./HomeSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homesection />} />
      </Routes>
    </Router>
  );
}

export default App;
