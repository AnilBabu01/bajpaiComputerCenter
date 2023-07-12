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
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rollno: {
    type: DataTypes.STRING,
    defaultValue: true,
  },
  certificateurl: {
    type: DataTypes.STRING,
    defaultValue: true,
  },
});

module.exports = Certificate;
