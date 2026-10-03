"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("leads", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      service_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
          model: "services",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      phone: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },

      company_name: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },

      website: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },

      message: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      budget: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },

      source: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },

      status: {
        type: Sequelize.ENUM(
          "new",
          "contacted",
          "qualified",
          "proposal",
          "won",
          "lost"
        ),
        allowNull: false,
        defaultValue: "new",
      },

      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      assigned_to: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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

    await queryInterface.addIndex("leads", ["email"], {
      name: "leads_email_index",
    });

    await queryInterface.addIndex("leads", ["service_id"], {
      name: "leads_service_id_index",
    });

    await queryInterface.addIndex("leads", ["status"], {
      name: "leads_status_index",
    });

    await queryInterface.addIndex("leads", ["assigned_to"], {
      name: "leads_assigned_to_index",
    });

    await queryInterface.addIndex("leads", ["created_at"], {
      name: "leads_created_at_index",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("leads");
  },
};