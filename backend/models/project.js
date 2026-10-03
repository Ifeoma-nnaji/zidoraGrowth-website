"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      // No relationships currently.
    }
  }

  Project.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },

      slug: {
        type: DataTypes.STRING(220),
        allowNull: false,
        unique: true,
      },

      client_name: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },

      short_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      featured_image: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      website_url: {
        type: DataTypes.STRING(500),
        allowNull: true,
        validate: {
          isUrl: true,
        },
      },

      category: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },

      results: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      is_featured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      is_published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      sort_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Project",
      tableName: "projects",
      underscored: true,
      timestamps: true,
    }
  );

  return Project;
};