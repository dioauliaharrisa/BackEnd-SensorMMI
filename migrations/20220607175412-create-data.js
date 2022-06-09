'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debit: {
        type: Sequelize.STRING
      },
      tss: {
        type: Sequelize.STRING
      },
      pH: {
        type: Sequelize.STRING
      },
      no3n: {
        type: Sequelize.STRING
      },
      po4: {
        type: Sequelize.STRING
      },
      nh3n: {
        type: Sequelize.STRING
      },
      tds: {
        type: Sequelize.STRING
      },
      bod5: {
        type: Sequelize.STRING
      },
      cod: {
        type: Sequelize.STRING
      },
      fe: {
        type: Sequelize.STRING
      },
      cu: {
        type: Sequelize.STRING
      },
      cr: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Data');
  }
};