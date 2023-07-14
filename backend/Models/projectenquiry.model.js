const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Projectenquiry = sequelize.define("projectenquriy", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneno1: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  projecttype: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bussiness: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Projectenquiry;
