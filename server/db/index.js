'use strict';

const db = require('./database');
const Hunts = require('./models/hunts');
const Paintings = require('./models/paintings');
const Teachers = require('./models/teachers');
const Students = require('./models/students');
const Classrooms = require('./models/classrooms');
const Games = require('./models/games');

Paintings.belongsTo(Hunts);
Hunts.hasMany(Paintings);

Students.belongsToMany(Classrooms, { through: 'students-classrooms' });
Teachers.hasMany(Classrooms);
Classrooms.belongsTo(Teachers);

Classrooms.belongsToMany(Hunts, { through: Games });

module.exports = {
  // Include your models in this exports object as well!
  db,
  Hunts,
  Paintings,
  Teachers,
  Students,
  Classrooms,
  Games,
};
