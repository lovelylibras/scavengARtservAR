const Sequelize = require('sequelize');
const db = require('../database');
const crypto = require('crypto');

const Students = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('password');
    },
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue('salt');
    },
  },
});

Students.prototype.correctPassword = function(candidatePwd) {
  return (
    Students.encryptPassword(candidatePwd, this.salt()) === this.password()
  );
};

/**
 * classMethods
 */
Students.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

Students.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

/**
 * hooks
 */
const setSaltAndPassword = student => {
  if (student.changed('password')) {
    student.salt = Students.generateSalt();
    student.password = Students.encryptPassword(
      student.password(),
      student.salt()
    );
  }
};

Students.beforeCreate(setSaltAndPassword);
Students.beforeUpdate(setSaltAndPassword);
Students.beforeBulkCreate(students => {
  students.forEach(setSaltAndPassword);
});
module.exports = Students;
