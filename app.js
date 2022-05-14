const express = require('express');

const app = express();

// 모듈을 검색할 때, 특정 디렉토리명을 검색할 때 자동으로 index.js 파일을 찾는다.
const db = require('./models');

const { Member } = db;

// const members = require("./members");

// middle ware
app.use(express.json());
// middle ware에 의해
// req의 json 데이터가 request 객체의 body 프로퍼티에 설정된다.

// route handler
app.get('/api/members', async (req, res) => {
  const { team } = req.query;
  if (team) {
    const teamMembers = await Member.findAll({
      where: { team: team },
    });
    res.send(teamMembers);
  } else {
    const members = await Member.findAll({});
    res.send(members);
  }
});

app.get('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  // req.params = { 'id' = '1' }
  const member = await Member.findOne({ where: { id } });
  if (member) {
    res.send(member);
  } else {
    res.status(404).send({ message: 'There is no such member with the id!!' });
  }
});

// 일반 브라우저에서는 POST 리퀘스트를 보낼 수 없다.
app.post('/api/members', async (req, res) => {
  const newMember = req.body;
  const member = Member.build(newMember);
  await member.save();
  res.send(member);
});

// 기존 직원정보 수정하기
// app.put('/api/members/:id', (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   const member = members.find((m) => m.id === Number(id));
//   if (member) {
//     Object.keys(newInfo).forEach((prop) => {
//       member[prop] = newInfo[prop];
//     });
//     res.send(member);
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });

// app.put('/api/members/:id', async (req, res) => {
//   const { id } = req.params;
//   const newInfo = req.body;
//   const result = await Member.update(newInfo, { where: { id } });
//   if (result[0]) {
//     res.send({ message: `${result[0]} row(s) affected` });
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });

// ## ORM 체감 PUT method (수정하기)
app.put('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  const member = await Member.findOne({ where: { id } });
  Object.keys(newInfo).forEach((prop) => {
    member[prop] = newInfo[prop];
  });
  await member.save();
  res.send(member);
});

// 직원 정보 삭제하기
// app.delete('/api/members/:id', (req, res) => {
//   const { id } = req.params;
//   const membersCount = members.length;
//   // id값이 일치 하지 않는 정보들(배열들)만 따로 변수에 담는다.
//   members = members.filter((member) => member.id !== Number(id));
//   if (members.length < membersCount) {
//     res.send({ message: 'Deleted' });
//   } else {
//     res.status(404).send({ message: 'There is no member with the id!' });
//   }
// });

// ## ORM 체감 DELETE method (삭제하기)
app.delete('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCount = await Member.destroy({ where: { id } });
  if (deletedCount) {
    res.send({ message: `${deletedCount} row(s) deleted` });
  } else {
    res.status(404).send({ message: 'There is no member with the id!' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening...');
});
