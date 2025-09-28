const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  serial: { type: String, required: true, unique: true, trim: true },
  titulo: { type: String, required: true },
  sinopsis: { type: String, default: '' },
  url: { type: String, required: true, unique: true },
  imagen: { type: String, default: '' },
  anioEstreno: { type: Number },
  genero: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero', required: true },
  director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true },
  productora: { type: mongoose.Schema.Types.ObjectId, ref: 'Productora', required: true },
  tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo', required: true }
}, {
  timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' }
});

module.exports = mongoose.model('Media', mediaSchema);