"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projects", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      title: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      slug: {
        type: Sequelize.STRING(220),
        allowNull: false,
        unique: true,
      },

      client_name: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },

      short_description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      featured_image: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      website_url: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      category: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },

      results: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      is_featured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      is_published: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      sort_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
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

    await queryInterface.addIndex("projects", ["slug"], {
      unique: true,
      name: "projects_slug_unique",
    });

    await queryInterface.addIndex("projects", ["is_published"], {
      name: "projects_is_published_index",
    });

    await queryInterface.addIndex("projects", ["is_featured"], {
      name: "projects_is_featured_index",
    });

    await queryInterface.addIndex("projects", ["sort_order"], {
      name: "projects_sort_order_index",
    });

    await queryInterface.addIndex("projects", ["created_at"], {
      name: "projects_created_at_index",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("projects");
  },
};
