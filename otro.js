const http = require('http');

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