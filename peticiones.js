const mysql = require('mysql2');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'herberbatres',
database: 'estudiante',
});

// Realizar una consulta de selección
connection.query('SELECT * FROM personas', (error, results) => {
if (error) {
    console.error('Error al realizar la consulta: ', error);
    return;
}
console.log('Resultados de la consulta: ', results);
});

// Datos a insertar
const id = 'valor-1';
const nombre = 'valor-2';
const apellido = 'valor-3';

// Consulta de inserción
const insertQuery = 'INSERT INTO personas (id, nombre, apellido) VALUES (?, ?, ?)';
const values = [id, nombre, apellido];

// Realizar la inserción
connection.query(insertQuery, values, (error, results) => {
if (error) {
    console.error('Error al insertar datos: ', error);
    return;
}
console.log('Datos insertados con éxito.');
});


// Valor para la condición de eliminación
const valorAEliminar = 'valor-a-eliminar';

// Consulta de eliminación
const deleteQuery = 'DELETE FROM personas WHERE columna = 1';

// Realizar la eliminación
connection.query(deleteQuery, [valorAEliminar], (error, results) => {
if (error) {
    console.error('Error al eliminar datos: ', error);
    return;
}
console.log('Datos eliminados con éxito.');
});

// Cerrar la conexión cuando hayas terminado
connection.end();