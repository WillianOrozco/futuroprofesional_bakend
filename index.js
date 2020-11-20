const express = require('express');
const app = express();
const usuario = require('./routes/usuario');
const respuestas = require('./routes/respuestas');
// Ajustes
app.set('port',3001);

// Middlewares
app.use(express.json());

// Routes//
app.use('/api',usuario);
app.use('/api',respuestas);

// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});