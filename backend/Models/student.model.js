const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Student = sequelize.define("student", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fullname: {
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
  phoneno1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coursename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rollno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Student;
