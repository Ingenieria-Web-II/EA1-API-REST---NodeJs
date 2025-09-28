const Genero = require('../models/Genero');
const mongoose = require('mongoose');

exports.createGenero = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const exists = await Genero.findOne({ nombre });
    if (exists) return res.status(400).json({ message: 'El género ya existe' });

    const genero = await Genero.create({ nombre, descripcion });
    res.status(201).json(genero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGeneroById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'ID inválido' });

    const genero = await Genero.findById(id);
    if (!genero) return res.status(404).json({ message: 'No encontrado' });
    res.json(genero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByIdAndUpdate(id, req.body, { new: true });
    res.json(genero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json({ message: 'Género desactivado', genero });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};