const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'herberbatres',
    database: 'estudiante',
    });
// (Usa el paquete de base de datos correspondiente)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Ruta para la inserción de datos
app.post('/insertar', function (req, res) {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    // Consulta de inserción sin proporcionar un valor para 'id'
    const insertQuery = 'INSERT INTO people (Nombre, Apellido) VALUES (?, ?)';
    const values = [nombre, apellido];

    // Realizar la inserción
    connection.query(insertQuery, values, (error, results) => {
    if (error) {
        console.error('Error al insertar datos: ', error);
        res.json({ success: false, message: 'Error al insertar datos' });
    } else {
        console.log('Datos insertados con éxito.');
        res.json({ success: true, message: 'Datos insertados con éxito' });
    }
    });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000');
});
