const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost', 
user: 'root',
password: 'herberbatres',
database: 'estudiante'
});
// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'herberbatres',
    database: 'estudiante'
});

db.connect((err) => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
      return;
    }
    console.log('Conexión a la base de datos MySQL establecida');
  });