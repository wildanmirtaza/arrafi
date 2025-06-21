import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UndanganPages from "./pages/undanganPages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<div>Halaman Utama</div>} />

        {/* Halaman dengan Slug */}
        <Route path="/:slug" element={<UndanganPages />} />
      </Routes>
    </Router>
  );
}

export default App;
