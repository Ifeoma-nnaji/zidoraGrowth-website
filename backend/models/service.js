"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.hasMany(models.Lead, {
        foreignKey: "service_id",
        as: "leads",
      });
    }
  }

  Service.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },

      slug: {
        type: DataTypes.STRING(180),
        allowNull: false,
        unique: true,
      },

      short_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      icon: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },

      is_featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      sort_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
      underscored: true,
      timestamps: true,
    }
  );

  return Service;
};