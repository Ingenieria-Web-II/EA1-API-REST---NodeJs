const Media = require('../models/Media');
const Genero = require('../models/Genero');
const Director = require('../models/Director');
const Productora = require('../models/Productora');
const Tipo = require('../models/Tipo');
const mongoose = require('mongoose');

exports.createMedia = async (req, res) => {
  try {
    const { serial, titulo, url, genero, director, productora, tipo } = req.body;

    if (!serial || !titulo || !url || !genero || !director || !productora || !tipo) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const exists = await Media.findOne({ $or: [{ serial }, { url }] });
    if (exists) return res.status(400).json({ message: 'Serial o URL ya existen' });

    const checks = await Promise.all([
      Genero.findById(genero),
      Director.findById(director),
      Productora.findById(productora),
      Tipo.findById(tipo)
    ]);

    if (!checks[0] || !checks[0].estado) return res.status(400).json({ message: 'Género inválido' });
    if (!checks[1] || !checks[1].estado) return res.status(400).json({ message: 'Director inválido' });
    if (!checks[2] || !checks[2].estado) return res.status(400).json({ message: 'Productora inválida' });
    if (!checks[3]) return res.status(400).json({ message: 'Tipo inválido' });

    const media = await Media.create(req.body);
    res.status(201).json(media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMedias = async (req, res) => {
  try {
    const medias = await Media.find()
      .populate('genero', 'nombre')
      .populate('director', 'nombres')
      .populate('productora', 'nombre')
      .populate('tipo', 'nombre');
    res.json(medias);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMediaById = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findById(id)
      .populate('genero', 'nombre')
      .populate('director', 'nombres')
      .populate('productora', 'nombre')
      .populate('tipo', 'nombre');
    if (!media) return res.status(404).json({ message: 'No encontrado' });
    res.json(media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findByIdAndUpdate(id, req.body, { new: true });
    res.json(media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findByIdAndDelete(id);
    res.json({ message: 'Media eliminada', media });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};