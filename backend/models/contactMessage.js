"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ContactMessage extends Model {
    static associate(models) {
      // No relationships yet.
    }
  }

  ContactMessage.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },

      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },

      phone: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },

      subject: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM(
          "unread",
          "read",
          "replied",
          "archived"
        ),
        allowNull: false,
        defaultValue: "unread",
      },
    },
    {
      sequelize,
      modelName: "ContactMessage",
      tableName: "contact_messages",
      underscored: true,
      timestamps: true,
    }
  );

  return ContactMessage;
};