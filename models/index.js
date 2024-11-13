const { Sequelize } = require('sequelize');
const User = require('./User');
const UserAddress = require('./UserAddress');
const WorkflowComponent = require('./WorkflowComponent');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/primary.db'
});
const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User(sequelize, Sequelize);
db.UserAddress = UserAddress(sequelize, Sequelize);
db.WorkflowComponent = WorkflowComponent(sequelize, Sequelize);

db.UserAddress.belongsTo(db.User);
db.User.hasOne(db.UserAddress);

module.exports = db;
