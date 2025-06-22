import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UndanganPages from "./pages/undanganPages";
import DashboardAdmin from "./pages/dashboardAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Halaman Utama</div>} />
        <Route path="/:slug" element={<UndanganPages />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
