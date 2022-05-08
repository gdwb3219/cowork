'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {}
  Member.init(
    {
      id: {
        allowNull: false, // 항상 값이 있어야 한다.
        autoIncrement: true, // 이전 값보다 1이 큰 값을 생성하게끔 설정
        // Primary Key!!!
        primaryKey: true,
        // Primary Key!!!
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      team: DataTypes.STRING,
      position: DataTypes.STRING,
      emailAddress: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      admissionDate: DataTypes.DATE,
      birthday: DataTypes.DATE,
      profileImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Member',
    }
  );
  return Member;
};
