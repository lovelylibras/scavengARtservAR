const Sequelize = require('sequelize');
const db = require('../database');

const studentGames = db.define('studentGame', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  currentPainting: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = studentGames;
