import "animate.css";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import Dashboard from "./pages/Dashboard";

import Homepage from "./pages/Homepage";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Dashboard />} />
      </Routes>
      <Background />
    </div>
  );
}

export default App;
