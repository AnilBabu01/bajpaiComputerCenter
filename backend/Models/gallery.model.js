const { DataTypes } = require("sequelize");
const sequelize = require("../Helper/Connect");

const Gallery = sequelize.define("gallery", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imgurl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Gallery;
