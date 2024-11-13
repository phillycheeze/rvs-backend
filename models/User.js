const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.TEXT,
    birthday: DataTypes.STRING,
  });

  return User;
};
