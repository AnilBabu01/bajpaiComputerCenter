const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Works = sequelize.define("work", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  projectname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectscription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectimg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projecturl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Works;
