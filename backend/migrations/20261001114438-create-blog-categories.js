"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("blog_categories", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },

      slug: {
        type: Sequelize.STRING(180),
        allowNull: false,
        unique: true,
      },

      description: {
        type: Sequelize.TEXT,
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

    await queryInterface.addIndex("blog_categories", ["slug"], {
      unique: true,
      name: "blog_categories_slug_unique",
    });

    await queryInterface.addIndex("blog_categories", ["name"], {
      name: "blog_categories_name_index",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("blog_categories");
  },
};
