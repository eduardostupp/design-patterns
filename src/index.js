const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const userRoutes = require('./routes/users');
const shapeRoutes = require('./routes/shapes');

app.use('/api/users', userRoutes);
app.use('/api/shapes', shapeRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
