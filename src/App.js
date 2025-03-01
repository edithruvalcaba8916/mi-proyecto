import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./paginas/Home";
import Inventory from "./paginas/Inventory";
import Reports from "./paginas/Reports";
import Login from "./paginas/Login";
import Productos from "./paginas/Productos";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-6 text-white font-semibold">
        <li>
          <Link to="/" className="hover:text-gray-200">Inicio</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-200">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/inventory" className="hover:text-gray-200">Inventario</Link>
        </li>
        <li>
          <Link to="/productos" className="hover:text-gray-200">Productos</Link>
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
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
