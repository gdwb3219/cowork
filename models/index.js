const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const { username, password, database, host, dialect } = config;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const Member = require('./member')(sequelize, Sequelize.DataTypes);

// export를 통해서 Member 모델을 외부로 공개하면 되는데,
// 아래처럼 하는 이유는, 나중에 Member 뿐만 아니라 다른 Model도
// 필요하게 될 수도 있기 때문에, db라는 객체를 만들고 그 안에 Member 모델 저장
const db = {};
db.Member = Member;

module.exports = db;
