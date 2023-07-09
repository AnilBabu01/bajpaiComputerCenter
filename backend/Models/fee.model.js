const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Fee = sequelize.define("fee", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  fee: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Fee;
