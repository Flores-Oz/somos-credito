import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Exporta un array de sucursales a PDF.
 *
 * @param {Array} rows - Array de sucursales (como vienen del backend)
 * @param {string} titulo - Título que aparecerá en el PDF
 * @param {string} filename - Nombre del archivo PDF a descargar
 */
export function exportSucursalesPdf(rows, titulo = "Listado de sucursales", filename = "sucursales.pdf") {
  const doc = new jsPDF();

  doc.setFontSize(14);
  doc.text(titulo, 14, 15);

  const head = [["ID", "Nombre", "Dirección", "Municipio / Depto.", "Teléfono", "Estado"]];
  const body = rows.map((s) => [
    s.id,
    s.nombre,
    `${s.calle_numero}${s.colonia ? ", " + s.colonia : ""}${s.codigo_postal ? ", CP " + s.codigo_postal : ""}`,
    `${s.municipio}, ${s.departamento}`,
    s.telefono,
    s.estado,
  ]);

  autoTable(doc, {
    head,
    body,
    startY: 22,
    styles: { fontSize: 8 },
  });

  doc.save(filename);
}
