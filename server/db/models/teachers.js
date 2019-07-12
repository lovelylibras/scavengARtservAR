const Sequelize = require('sequelize');
const db = require('../database');
const crypto = require('crypto');

const Users = db.define('user', {
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

Users.prototype.correctPassword = function(candidatePwd) {
  return Users.encryptPassword(candidatePwd, this.salt()) === this.password();
};

/**
 * classMethods
 */
Users.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

Users.encryptPassword = function(plainText, salt) {
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
    teacher.salt = Users.generateSalt();
    teacher.password = Users.encryptPassword(
      teacher.password(),
      teacher.salt()
    );
  }
};

Users.beforeCreate(setSaltAndPassword);
Users.beforeUpdate(setSaltAndPassword);
Users.beforeBulkCreate(teachers => {
  teachers.forEach(setSaltAndPassword);
});

module.exports = Users;
