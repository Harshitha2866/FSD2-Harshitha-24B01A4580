import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./dashboard.jsx";
import Profile from "./profile.jsx";
import Services from "./services.jsx";
import App1 from "./app1.jsx";

function App() {
  return (
    <Router>

      <nav style={{ background: "#eeeeee", padding: "12px" }}>

        <Link to="/" style={{ marginRight: "10px" }}>
          Dashboard
        </Link>

        <Link to="/profile" style={{ marginRight: "10px" }}>
          Profile
        </Link>

        <Link to="/services" style={{ marginRight: "10px" }}>
          Services
        </Link>

        <Link to="/App1">
          App1
        </Link>

      </nav>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/services" element={<Services />} />

        <Route path="/App1" element={<App1 />} />

      </Routes>

    </Router>
  );
}

export default App;