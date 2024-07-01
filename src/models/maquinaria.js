'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maquinaria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Maquinaria.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    ubicacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Maquinaria',
  });
  return Maquinaria;
};