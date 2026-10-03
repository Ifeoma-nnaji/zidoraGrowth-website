"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Lead extends Model {
    static associate(models) {
      Lead.belongsTo(models.Service, {
        foreignKey: "service_id",
        as: "service",
      });

      Lead.belongsTo(models.User, {
        foreignKey: "assigned_to",
        as: "assignedUser",
      });
    }
  }

  Lead.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },

      service_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
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

      company_name: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },

      website: {
        type: DataTypes.STRING(500),
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },

      message: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      budget: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },

      source: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },

      status: {
        type: DataTypes.ENUM(
          "new",
          "contacted",
          "qualified",
          "proposal",
          "won",
          "lost"
        ),
        allowNull: false,
        defaultValue: "new",
      },

      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      assigned_to: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Lead",
      tableName: "leads",
      underscored: true,
      timestamps: true,
    }
  );

  return Lead;
};