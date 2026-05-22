const { DataTypes } = require("sequelize");

const sequelize = require("../config/bd_postgre");

const Product = sequelize.define("Product", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },

  category: {
    type: DataTypes.STRING,
    allowNull: false
  },

  supplier: {
    type: DataTypes.STRING,
    allowNull: false
  },

  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }

}, {
  tableName: "products",
  timestamps: true
});

module.exports = Product;