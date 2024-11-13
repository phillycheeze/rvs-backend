const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const WorkflowComponent = sequelize.define("WorkflowComponent", {
    name: DataTypes.STRING,
    sort_index: DataTypes.INTEGER,
  });

  WorkflowComponent.sync().then(async () => {
    await WorkflowComponent.findOrCreate({
      where: {
        name: "about",
      },
      defaults: {
        sort_index: 2,
      },
    });

    await WorkflowComponent.findOrCreate({
      where: {
        name: "birthday",
      },
      defaults: {
        sort_index: 2,
      },
    });

    await WorkflowComponent.findOrCreate({
      where: {
        name: "address",
      },
      defaults: {
        sort_index: 3,
      },
    });
  });

  return WorkflowComponent;
};
