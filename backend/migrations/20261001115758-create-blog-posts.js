"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("blog_posts", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      author_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },

      category_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
          model: "blog_categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      slug: {
        type: Sequelize.STRING(280),
        allowNull: false,
        unique: true,
      },

      excerpt: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      content: {
        type: Sequelize.TEXT("long"),
        allowNull: false,
      },

      featured_image: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      meta_title: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      meta_description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      status: {
        type: Sequelize.ENUM(
          "draft",
          "published",
          "archived"
        ),
        allowNull: false,
        defaultValue: "draft",
      },

      published_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });

    await queryInterface.addIndex("blog_posts", ["slug"], {
      unique: true,
      name: "blog_posts_slug_unique",
    });

    await queryInterface.addIndex("blog_posts", ["author_id"], {
      name: "blog_posts_author_id_index",
    });

    await queryInterface.addIndex("blog_posts", ["category_id"], {
      name: "blog_posts_category_id_index",
    });

    await queryInterface.addIndex("blog_posts", ["status"], {
      name: "blog_posts_status_index",
    });

    await queryInterface.addIndex("blog_posts", ["published_at"], {
      name: "blog_posts_published_at_index",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("blog_posts");
  },
};
