const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Fee = sequelize.define("course", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  fee: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
});

module.exports = Fee;
