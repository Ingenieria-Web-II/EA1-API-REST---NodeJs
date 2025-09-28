const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true, trim: true },
  slogan: { type: String, default: '' },
  descripcion: { type: String, default: '' },
  estado: { type: Boolean, default: true }
}, {
  timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' }
});

module.exports = mongoose.model('Productora', productoraSchema);