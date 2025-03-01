import React, { useState } from "react";

const productos = [
  { id: 1, nombre: "Botella Reutilizable", categoria: "Accesorios" },
  { id: 2, nombre: "Bolsa Ecológica", categoria: "Bolsas" },
  { id: 3, nombre: "Popotes de Bambú", categoria: "Accesorios" },
];

function Productos() {
  const [categoria, setCategoria] = useState("");

  const productosFiltrados = categoria
    ? productos.filter((p) => p.categoria === categoria)
    : productos;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Explorar Productos</h2>
      <select
        className="mb-4 p-2 border rounded"
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Todas las categorías</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Bolsas">Bolsas</option>
      </select>
      <ul className="list-disc pl-6">
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>{producto.nombre} - {producto.categoria}</li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
