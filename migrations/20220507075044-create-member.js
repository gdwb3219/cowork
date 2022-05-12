'use strict';
module.exports = {
  // UP method 마이그레이션을 적용할 때 실행
  async up(queryInterface, Sequelize) {
    // 데이터 베이스에 테이블을 만드는 코드
    // 단수형인 Member로 했는데, 복수형인 Members로 변환 (테이블 이름)
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
  // DOWN method 마이그레이션을 해제할 때 실행
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Members');
  },
};
