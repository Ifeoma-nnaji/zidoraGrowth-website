"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("services", {
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

      short_description: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      icon: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },

      is_featured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
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

    await queryInterface.addIndex("services", ["slug"], {
      unique: true,
      name: "services_slug_unique",
    });

    await queryInterface.addIndex("services", ["is_active"], {
      name: "services_is_active_index",
    });

    await queryInterface.addIndex("services", ["is_featured"], {
      name: "services_is_featured_index",
    });

    await queryInterface.addIndex("services", ["sort_order"], {
      name: "services_sort_order_index",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("services");
  },
};
