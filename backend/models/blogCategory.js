"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BlogCategory extends Model {
    static associate(models) {
      BlogCategory.hasMany(models.BlogPost, {
        foreignKey: "category_id",
        as: "posts",
      });
    }
  }

  BlogCategory.init(
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

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "BlogCategory",
      tableName: "blog_categories",
      underscored: true,
      timestamps: true,
    }
  );

  return BlogCategory;
};