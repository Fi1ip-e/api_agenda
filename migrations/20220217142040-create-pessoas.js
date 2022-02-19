'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tbcontatos', { 
      id:
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      first_name:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },

      last_name:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      email:
      {
        type: Sequelize.STRING,
        allowNull: false,
      },

      telephone_1:
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      telephone_2:
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tbcontatos');
  }
};
