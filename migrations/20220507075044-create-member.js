'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Members', {
      id: {
        allowNull: false, // 항상 값이 있어야 한다.
        autoIncrement: true, // 이전 값보다 1이 큰 값을 생성하게끔 설정
        // Primary Key!!!
        primaryKey: true,
        // Primary Key!!!
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      team: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.STRING,
      },
      emailAddress: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      admissionDate: {
        type: Sequelize.DATE,
      },
      birthday: {
        type: Sequelize.DATE,
      },
      profileImage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Members');
  },
};
