const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Branch = sequelize.define("course", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  branchname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Branch;
