"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Conversations, User }) {
      // define association here
      Messages.belongsTo(Conversations, {
        foreignKey: "conversationID",
        as: "messageConversation",
      });
      Messages.belongsTo(User, {
        foreignKey: "senderID",
        as: "messageUser",
      });
    }
  }
  Messages.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "messages",
      modelName: "Messages",
    }
  );
  return Messages;
};
