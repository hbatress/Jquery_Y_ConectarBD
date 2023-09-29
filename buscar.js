const valorEspecifico = 'valor_deseado'; // Reemplaza 'valor_deseado' con el valor que deseas buscar

// Realizar una consulta de selección con un valor específico
connection.query('SELECT * FROM personas WHERE columna = ?', [valorEspecifico], (error, results) => {
    if (error) {
        console.error('Error al realizar la consulta: ', error);
        return;
    }
    console.log('Resultados de la consulta: ', results);
});
