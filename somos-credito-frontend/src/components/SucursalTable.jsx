// src/components/SucursalTable.jsx
function SucursalTable({
  sucursales,
  loading,
  page,
  rowsPerPage,
  totalRows,
  onPageChange,
  onEditar,
  onEliminar,
  onCambiarEstado,
}) {
  if (loading) return <p>Cargando...</p>;

  if (totalRows === 0) {
    return <p>No hay sucursales que coincidan con el filtro.</p>;
  }

  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  return (
    <div className="card">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Municipio / Depto.</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sucursales.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.nombre}</td>
                <td>
                  {s.calle_numero}
                  {s.colonia ? `, ${s.colonia}` : ""}
                  {s.codigo_postal ? `, CP ${s.codigo_postal}` : ""}
                </td>
                <td>
                  {s.municipio}, {s.departamento}
                </td>
                <td>{s.telefono}</td>
                <td>
                  <span
                    className={
                      s.estado === "ACTIVA"
                        ? "badge badge-activa"
                        : s.estado === "INACTIVA"
                        ? "badge badge-inactiva"
                        : "badge badge-pendiente"
                    }
                  >
                    {s.estado}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => onEditar(s)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onEliminar(s.id)}
                  >
                    Eliminar
                  </button>
                  {s.estado !== "ACTIVA" && (
                    <button
                      className="btn btn-primary"
                      onClick={() => onCambiarEstado(s, "ACTIVA")}
                    >
                      Dar de alta
                    </button>
                  )}
                  {s.estado === "ACTIVA" && (
                    <button
                      className="btn btn-secondary"
                      onClick={() => onCambiarEstado(s, "INACTIVA")}
                    >
                      Dar de baja
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
        >
          « Anterior
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
        >
          Siguiente »
        </button>
      </div>
    </div>
  );
}

export default SucursalTable;
