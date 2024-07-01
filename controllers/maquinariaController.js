const { Maquinaria } = require('../models');

exports.index = async (req, res) => {
  const maquinarias = await Maquinaria.findAll();
  res.render('maquinaria/index', { maquinarias });
};

exports.new = (req, res) => {
  res.render('maquinaria/new');
};

exports.create = async (req, res) => {
  const { nombre, descripcion, ubicacion } = req.body;
  await Maquinaria.create({ nombre, descripcion, ubicacion });
  res.redirect('/maquinaria');
};
