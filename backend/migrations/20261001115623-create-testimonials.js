"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("testimonials", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      company: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },

      role: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },

      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      rating: {
        type: Sequelize.TINYINT.UNSIGNED,
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

    await queryInterface.addIndex("testimonials", ["is_published"], {
      name: "testimonials_is_published_index",
    });

    await queryInterface.addIndex("testimonials", ["is_featured"], {
      name: "testimonials_is_featured_index",
    });

    await queryInterface.addIndex("testimonials", ["sort_order"], {
      name: "testimonials_sort_order_index",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("testimonials");
  },
};