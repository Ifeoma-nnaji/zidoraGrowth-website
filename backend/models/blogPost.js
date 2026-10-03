"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    static associate(models) {
      BlogPost.belongsTo(models.User, {
        foreignKey: "author_id",
        as: "author",
      });

      BlogPost.belongsTo(models.BlogCategory, {
        foreignKey: "category_id",
        as: "category",
      });
    }
  }

  BlogPost.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },

      author_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },

      category_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
      },

      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      slug: {
        type: DataTypes.STRING(280),
        allowNull: false,
        unique: true,
      },

      excerpt: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      content: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },

      featured_image: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      meta_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      meta_description: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      status: {
        type: DataTypes.ENUM(
          "draft",
          "published",
          "archived"
        ),
        allowNull: false,
        defaultValue: "draft",
      },

      published_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "BlogPost",
      tableName: "blog_posts",
      underscored: true,
      timestamps: true,
    }
  );

  return BlogPost;
};