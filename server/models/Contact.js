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
      Contact.belongsTo(User, {
        foreignKey: "userID1",
        as: "contactUser1",
      });
      Contact.belongsTo(User, {
        foreignKey: "userID2",
        as: "contactUser2",
      });
    }
  }
  Contact.init(
    {
      confirmed: {
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
