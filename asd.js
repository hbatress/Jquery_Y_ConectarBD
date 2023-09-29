const http = require('http');
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

// Realizar una consulta de selección
connection.query('SELECT * FROM personas', (error, results) => {
    if (error) {
        console.error('Error al realizar la consulta: ', error);
        return;
    }
    console.log('Resultados de la consulta: ', results);
    });

connection.end();