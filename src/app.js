const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors({
  origin: 'https://ratingpelis.vercel.app/'
}));
app.use(express.json());

// Conectar DB
connectDB();

// Rutas
app.use('/api/generos', require('./routes/generoRoutes'));
app.use('/api/directores', require('./routes/directorRoutes'));
app.use('/api/productoras', require('./routes/productoraRoutes'));
app.use('/api/tipos', require('./routes/tipoRoutes'));
app.use('/api/media', require('./routes/mediaRoutes'));

module.exports = app;