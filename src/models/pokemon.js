const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemon", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey:true
    },
    name:{
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    image:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    attack:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    specialDefense:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    specialAttack:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    speed:{
      type: DataTypes.INTEGER,
      defaultValue:90
    },
    height:{
      type: DataTypes.INTEGER,
      defaultValue:4
    },
    weight:{
      type: DataTypes.INTEGER,
      defaultValue:60
    }
  });
};
