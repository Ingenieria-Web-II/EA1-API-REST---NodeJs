const Tipo = require('../models/Tipo');

exports.createTipo = async (req, res) => {
  try {
    const tipo = await Tipo.create(req.body);
    res.status(201).json(tipo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTipos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTipo = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = await Tipo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(tipo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTipo = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = await Tipo.findByIdAndDelete(id);
    res.json({ message: 'Tipo eliminado', tipo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};