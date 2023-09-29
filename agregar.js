const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost', 
user: 'root',
password: 'herberbatres',
database: 'estudiante'
});

// Conectar a la base de datos
connection.connect((err) => {
if (err) {
    console.error('Error al conectar a la base de datos:', err);
} else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Datos a insertar
const id = '4';
const nombre = 'Carlos';
const apellido = 'Pérez';

// Consulta para verificar si el ID ya existe
const checkIdQuery = 'SELECT id FROM personas WHERE id = ?';

// Consulta de inserción
const insertQuery = 'INSERT INTO personas (id, nombre, apellido) VALUES (?, ?, ?)';
const values = [id, nombre, apellido];

// Realizar la consulta para verificar la existencia del ID

connection.query(checkIdQuery, [id], (checkError, checkResults) => {
    if (checkError) {
    console.error('Error al verificar el ID: ', checkError);
    return;
    }

    if (checkResults.length > 0) {
    console.log('El ID ya existe en la base de datos. No se ha realizado la inserción.');
    connection.end();
    } else {
      // El ID no existe, realizar la inserción
    connection.query(insertQuery, values, (insertError, insertResults) => {
        if (insertError) {
        console.error('Error al insertar datos: ', insertError);
        return;
        }
        console.log('Datos insertados con éxito.');
        connection.end();
    });
    }
});