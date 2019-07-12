'use strict';

const db = require('./database');
const Hunts = require('./models/hunts');
const Paintings = require('./models/paintings');
const Users = require('./models/teachers');
const Students = require('./models/students');
const Classrooms = require('./models/classrooms');
const Games = require('./models/games');
const studentGames = require('./models/studentGames');
const Museums = require('./models/museums');

Paintings.belongsTo(Hunts);
Hunts.hasMany(Paintings);

Hunts.belongsTo(Museums);

Students.belongsToMany(Classrooms, { through: 'students-classrooms' });
Users.hasMany(Games);
Games.belongsTo(Users);

Games.belongsTo(Hunts);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Hunts,
  Paintings,
  Users,
  Students,
  Classrooms,
  Games,
  Museums,
};
