import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <h1 className="text-4xl font-bold text-center mt-10">Bienvenido al sistema de inventarios</h1>;
}

function Inventory() {
  return <h1 className="text-3xl text-center mt-10">Gestión de Inventarios</h1>;
}

function Reports() {
  return <h1 className="text-3xl text-center mt-10">Reportes</h1>;
}

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-6 text-white font-semibold">
        <li>
          <Link to="/" className="hover:text-gray-200">Inicio</Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:text-gray-200">Inventario</Link>
        </li>
        <li>
          <Link to="/reports" className="hover:text-gray-200">Reportes</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
