// src/components/SucursalForm.jsx
function SucursalForm({ form, modoEdicion, onChange, onSubmit, onCancel }) {
  return (
    <div className="card">
      <h2 className="card-title">
        {modoEdicion ? "Editar sucursal" : "Registrar nueva sucursal"}
      </h2>

      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Nombre de la sucursal</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Calle y número</label>
            <input
              type="text"
              name="calle_numero"
              value={form.calle_numero}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Colonia / Barrio</label>
            <input
              type="text"
              name="colonia"
              value={form.colonia}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label>Municipio</label>
            <input
              type="text"
              name="municipio"
              value={form.municipio}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Departamento</label>
            <input
              type="text"
              name="departamento"
              value={form.departamento}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Código Postal</label>
            <input
              type="text"
              name="codigo_postal"
              value={form.codigo_postal}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={onChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Estado</label>
            <select
              name="estado"
              value={form.estado}
              onChange={onChange}
            >
              <option value="ACTIVA">ACTIVA</option>
              <option value="INACTIVA">INACTIVA</option>
              <option value="PENDIENTE">PENDIENTE</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit">
            {modoEdicion ? "Actualizar sucursal" : "Guardar sucursal"}
          </button>
          {modoEdicion && (
            <button
              className="btn btn-secondary"
              type="button"
              onClick={onCancel}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SucursalForm;
