import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavbarSection from "./NavbarSection";
import Homesection from "./HomeSection";
import MyorderSection from "./MyorderSection";
import AdminPanel from "./DashBoard/AdminPanel";

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/adminpanel" && <NavbarSection />}
      <Routes>
        <Route path="/" element={<Homesection />} />
        <Route path="/myorder" element={<MyorderSection />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
