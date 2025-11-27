// src/components/SucursalFilters.jsx
function SucursalFilters({ filters, onChange }) {
  const handleChange = (e) => {
    onChange({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card">
      <h2 className="card-title">Filtros</h2>
      <div className="filters-bar">
        <input
          type="text"
          name="texto"
          placeholder="Buscar por nombre, municipio o depto."
          value={filters.texto}
          onChange={handleChange}
        />
        <select
          name="estado"
          value={filters.estado}
          onChange={handleChange}
        >
          <option value="TODOS">Todos los estados</option>
          <option value="ACTIVA">ACTIVA</option>
          <option value="INACTIVA">INACTIVA</option>
          <option value="PENDIENTE">PENDIENTE</option>
        </select>
      </div>
    </div>
  );
}

export default SucursalFilters;
