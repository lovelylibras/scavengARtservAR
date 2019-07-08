'use strict';

const db = require('./database');
const Hunts = require('./models/hunts');
const Paintings = require('./models/paintings');
const Teachers = require('./models/teachers');
const Students = require('./models/students');
const Classrooms = require('./models/classrooms');
const Games = require('./models/games');
const studentGames = require('./models/studentGames');
const Museums = require('./models/museums');

Paintings.belongsTo(Hunts);
Hunts.hasMany(Paintings);

Hunts.belongsTo(Museums);

Students.belongsToMany(Classrooms, { through: 'students-classrooms' });
Teachers.hasMany(Classrooms);
Classrooms.belongsTo(Teachers);

Students.belongsToMany(Games, {
  through: studentGames,
  otherKey: 'classroomId',
});

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
  Museums,
};
