import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountdownPage from "./pages/CountdownPage";
import UndanganPages from "./pages/UndanganPages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<UndanganPages />} />

        {/* Halaman Countdown */}
        <Route path="/countdown" element={<CountdownPage />} />
      </Routes>
    </Router>
  );
}

export default App;
