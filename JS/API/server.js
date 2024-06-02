// Importar el módulo Express
const express = require('express');

// Crear una instancia de Express
const app = express();

// Definir un puerto para el servidor
const PORT = process.env.PORT || 3000;

// Definir una ruta para la raíz ("/")
app.get('/', (req, res) => {
//   res.send('¡Hola Mundo!');
    res.send(path.join(__dirname + "/index.html"));
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
