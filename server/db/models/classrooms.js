const Sequelize = require('sequelize');
const db = require('../database');

const Classrooms = db.define('classroom', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Classrooms;
