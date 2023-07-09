const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Certificate = sequelize.define("certificate", {
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
    allowNull: true,
  },
  phoneno1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneno2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coursename: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fee: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  aadharcard: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  partportphoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentstatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  rollno: {
    type: DataTypes.STRING,
    defaultValue: true,
  },
});

module.exports = Certificate;
