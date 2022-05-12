'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {}
  Member.init(
    // db의 테이블 컬럼과 같은 이름과 타입을 설정해주지 않으면 인식 안된다.
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
    // sequelize 객체를 나중에 만들껀데, 그 객체가 여기에 들어와서
    // members 테이블을 인식하는데 사용된다.
    {
      sequelize,
      modelName: 'Member',
    }
  );
  // 테이블 연동처리가 끝난 Member 클래스를 return
  return Member;
};
