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
    type: Sequelize.DOUBLE,
  },
  lng: {
    type: Sequelize.DOUBLE,
  },
});

module.exports = Museums;
