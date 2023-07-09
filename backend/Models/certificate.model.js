const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Certificate = sequelize.define("course", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateofbirth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  phoneno1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneno2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coursename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fee: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  aadharcard: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partportphoto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentstatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Certificate;
