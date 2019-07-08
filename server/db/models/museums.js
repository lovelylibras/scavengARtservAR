const Sequelize = require('sequelize');
const db = require('../database');

const Museums = db.define('museum', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lat: {
    type: Sequelize.INTEGER,
  },
  lng: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Museums;
