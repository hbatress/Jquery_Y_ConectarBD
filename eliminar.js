// Valor para la condición de eliminación (ID a eliminar)
const valorAEliminar = 5; // ID que deseas eliminar

// Consulta de eliminación basada en el ID
const deleteQuery = 'DELETE FROM personas WHERE id = ?';
// Realizar la eliminación
connection.query(deleteQuery, [valorAEliminar], (error, results) => {
  if (error) {
    console.error('Error al eliminar datos: ', error);
    return;
  }
  console.log('Dato con ID', valorAEliminar, 'eliminado con éxito.');
});

// Cerrar la conexión cuando hayas terminado
connection.end();