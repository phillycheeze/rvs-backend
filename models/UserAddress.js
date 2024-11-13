const { Sequelize, DataTypes } = require('sequelize');
const User = require('./User');

module.exports = (sequelize, Sequelize) => {
  const UserAddress = sequelize.define('UserAddress', {
    address_line_1: DataTypes.STRING,
    address_line_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
  });

  return UserAddress
}

