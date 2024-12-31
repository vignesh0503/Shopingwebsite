import "./App.css";
import Homesection from "./HomeSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyorderSection from "./MyorderSection";
import NavbarSection from "./NavbarSection";
import StepperSection from "./StepperSection";

function App() {
  return (
    <Router>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Homesection />} />
        <Route path="/about" element={<Homesection />} />
        <Route path="/myorder" element={<MyorderSection />} />
        <Route path="/contact" element={<StepperSection />} />
      </Routes>
    </Router>
  );
}

export default App;
