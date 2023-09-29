const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001; // Puedes cambiar el puerto si lo deseas

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
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.post('/estudiante', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
  
    const checkIdQuery = 'SELECT id FROM personas WHERE id = ?';
    const insertQuery = 'INSERT INTO personas (id, nombre, apellido) VALUES (?, ?, ?)';
    const values = [id, nombre, apellido];
  
    db.query(checkIdQuery, [id], (checkError, checkResults) => {
      if (checkError) {
        console.error('Error al verificar el ID: ', checkError);
        res.status(500).json({ mensaje: 'Error al guardar el usuario' });
        return;
      }
  
      if (checkResults.length > 0) {
        console.log('El ID ya existe en la base de datos. No se ha realizado la inserción.');
        res.json({ mensaje: 'El ID ya existe en la base de datos. No se ha realizado la inserción.' });
      } else {
        db.query(insertQuery, values, (insertError, insertResults) => {
          if (insertError) {
            console.error('Error al insertar datos: ', insertError);
            res.status(500).json({ mensaje: 'Error al guardar el usuario' });
            return;
          }
          console.log('Datos insertados con éxito.');
          res.json({ mensaje: 'Datos insertados con éxito.' });
        });
      }
    });
  });
  app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
  });