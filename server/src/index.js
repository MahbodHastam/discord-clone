const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.send(`Hey boy`);
});

app.get('/user/friends-list', (req, res) => {
  res.json([
    {id: 1, name: "Mahbod", status: 'Going to die', avatar: `http://localhost:3001/img/3.jpg`, isOnline: false},
    {id: 2, name: "Proffessor Dibi", status: 'Akbaro kobra, nanay', avatar: `http://localhost:3001/img/1.jpg`, isOnline: true},
    {id: 3, name: "Oskol", status: '', avatar: `http://localhost:3001/img/2.jpg`, isOnline: true},
  ]);
});

app.listen(3001, () => {
  console.log(`Running on port 3001`);
});