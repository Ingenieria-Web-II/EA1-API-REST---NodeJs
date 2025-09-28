const Director = require('../models/Director');
const mongoose = require('mongoose');

exports.createDirector = async (req, res) => {
  try {
    const { nombres } = req.body;
    if (!nombres) return res.status(400).json({ message: 'El nombre es obligatorio' });

    const director = await Director.create({ nombres });
    res.status(201).json(director);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDirectores = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDirectorById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'ID inválido' });

    const director = await Director.findById(id);
    if (!director) return res.status(404).json({ message: 'No encontrado' });
    res.json(director);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findByIdAndUpdate(id, req.body, { new: true });
    if (!director) return res.status(404).json({ message: 'No encontrado' });
    res.json(director);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findByIdAndUpdate(id, { estado: false }, { new: true });
    if (!director) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Director desactivado', director });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};