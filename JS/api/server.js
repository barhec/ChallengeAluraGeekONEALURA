const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'database')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'database', 'db.jason'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});