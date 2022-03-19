"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Contact, Conversations, Messages }) {
      // define association here
      this.hasMany(
        Contact,
        { foreignKey: "userID1", as: "contacts" },
        { foreignKey: "userID2", as: "contacts" }
      );

      this.hasMany(
        Conversations,
        {
          foreignKey: "userID1",
          as: "conversations",
        },
        {
          foreignKey: "userID2",
          as: "conversations",
        }
      );

      this.hasMany(Messages, { foreignKey: "senderID", as: "messages" });
    }

    // hide the response id and password
    toJSON() {
      return { ...this.get(), id: undefined, password: undefined };
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a first name" },
          notEmpty: { msg: "Name must not be empty" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a last name" },
          notEmpty: { msg: "Name must not be empty" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a password" },
          notEmpty: { msg: "Password must not be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a email" },
          notEmpty: { msg: "email must not be empty" },
          isEmail: { msg: "Must be a valid email address" },
        },
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a email" },
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
