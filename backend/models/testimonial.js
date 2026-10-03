"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Testimonial extends Model {
    static associate(models) {
      // No relationships currently.
    }
  }

  Testimonial.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },

      company: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },

      role: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },

      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      rating: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        validate: {
          min: 1,
          max: 5,
        },
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
      modelName: "Testimonial",
      tableName: "testimonials",
      underscored: true,
      timestamps: true,
    }
  );

  return Testimonial;
};