"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: "FK_CONTACTS_USERS1",
        as: "contact1",
      });
      this.belongsTo(User, {
        foreignKey: "FK_CONTACTS_USERS2",
        as: "contact2",
      });
    }
  }
  Contact.init(
    {
      user1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "contacts",
      modelName: "Contact",
    }
  );
  return Contact;
};
