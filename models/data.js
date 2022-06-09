'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data.init({
    debit: DataTypes.STRING,
    tss: DataTypes.STRING,
    pH: DataTypes.STRING,
    no3n: DataTypes.STRING,
    po4: DataTypes.STRING,
    nh3n: DataTypes.STRING,
    tds: DataTypes.STRING,
    bod5: DataTypes.STRING,
    cod: DataTypes.STRING,
    fe: DataTypes.STRING,
    cu: DataTypes.STRING,
    cr: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};