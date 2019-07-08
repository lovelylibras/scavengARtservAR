const Sequelize = require('sequelize');
const db = require('../database');
const crypto = require('crypto');

const Teachers = db.define('teacher', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  userName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
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

Teachers.prototype.correctPassword = function(candidatePwd) {
  return (
    Teachers.encryptPassword(candidatePwd, this.salt()) === this.password()
  );
};

/**
 * classMethods
 */
Teachers.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

Teachers.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex');
};

/**
 * hooks
 */
const setSaltAndPassword = teacher => {
  if (teacher.changed('password')) {
    teacher.salt = Teachers.generateSalt();
    teacher.password = Teachers.encryptPassword(
      teacher.password(),
      teacher.salt()
    );
  }
};

Teachers.beforeCreate(setSaltAndPassword);
Teachers.beforeUpdate(setSaltAndPassword);
Teachers.beforeBulkCreate(teachers => {
  teachers.forEach(setSaltAndPassword);
});

module.exports = Teachers;
