"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Conversations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Messages }) {
      // define association here
      Conversations.belongsTo(
        User,
        {
          foreignKey: "userID1",
          as: "conversationUser",
        },
        {
          foreignKey: "userID2",
          as: "conversationUser",
        }
      );

      this.hasMany(Messages, { foreignKey: "conversationID", as: "messages" });
    }
  }
  Conversations.init(
    {},
    {
      sequelize,
      tableName: "conversations",
      modelName: "Conversations",
    }
  );
  return Conversations;
};
