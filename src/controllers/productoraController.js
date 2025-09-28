const Productora = require('../models/Productora');

exports.createProductora = async (req, res) => {
  try {
    const productora = await Productora.create(req.body);
    res.status(201).json(productora);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductoraById = async (req, res) => {
  try {
    const productora = await Productora.findById(req.params.id);
    if (!productora) {
      return res.status(404).json({ msg: "Productora no encontrada" });
    }
    res.json(productora);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

exports.updateProductora = async (req, res) => {
  try {
    const { id } = req.params;
    const productora = await Productora.findByIdAndUpdate(id, req.body, { new: true });
    res.json(productora);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProductora = async (req, res) => {
  try {
    const { id } = req.params;
    const productora = await Productora.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json({ message: 'Productora desactivada', productora });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};