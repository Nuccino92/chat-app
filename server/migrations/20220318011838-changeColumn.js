"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("users", "lasstName", "lastName");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Users", "lasstName", "lastName");
  },
};
