const Sequelize = require('sequelize');
const db = require('../database');

const Games = db.define('game', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: Sequelize.ENUM('active', 'completed'),
    allowNull: false,
    defaultValue: 'active',
  },
  accessCode: {
    type: Sequelize.STRING,
    defaultValue: Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase(),
  },
});

module.exports = Games;
