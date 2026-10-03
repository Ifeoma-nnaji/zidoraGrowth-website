"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contact_messages", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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

      subject: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      status: {
        type: Sequelize.ENUM(
          "unread",
          "read",
          "replied",
          "archived"
        ),
        allowNull: false,
        defaultValue: "unread",
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

    await queryInterface.addIndex("contact_messages", ["email"], {
      name: "contact_messages_email_index",
    });

    await queryInterface.addIndex("contact_messages", ["status"], {
      name: "contact_messages_status_index",
    });

    await queryInterface.addIndex("contact_messages", ["created_at"], {
      name: "contact_messages_created_at_index",
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("contact_messages");
  },
};