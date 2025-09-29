const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors({}));
app.use(express.json());

app.get('/', (_, res) => res.send('API corriendo'));
app.get('/health', (_, res) => res.json({ ok: true, at: new Date() }));

// Conectar DB
connectDB();

// Rutas
app.use('/api/generos', require('./routes/generoRoutes'));
app.use('/api/directores', require('./routes/directorRoutes'));
app.use('/api/productoras', require('./routes/productoraRoutes'));
app.use('/api/tipos', require('./routes/tipoRoutes'));
app.use('/api/media', require('./routes/mediaRoutes'));

module.exports = app;