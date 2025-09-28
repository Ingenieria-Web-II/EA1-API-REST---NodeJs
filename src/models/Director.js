const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  nombres: { type: String, required: true, trim: true },
  estado: { type: Boolean, default: true }
}, {
  timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' }
});

module.exports = mongoose.model('Director', directorSchema);