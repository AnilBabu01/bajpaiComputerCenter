const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Course = sequelize.define("course", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coursename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courdescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courseimg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Course;
