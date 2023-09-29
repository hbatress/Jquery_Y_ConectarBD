const express = require('express');
const app = express();

// Define rutas y configuraciones aquí

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});
