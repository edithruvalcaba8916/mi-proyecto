import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link to="/" className="hover:underline">Inicio</Link>
      <Link to="/inventory" className="hover:underline">Inventario</Link>
      <Link to="/reports" className="hover:underline">Reportes</Link>
    </nav>
  );
}

export default Navbar;

