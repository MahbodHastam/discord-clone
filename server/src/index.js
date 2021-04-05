const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.send(`Hey boy`);
});

app.get('/user/friends-list', (req, res) => {
  res.json([
    {id: 1, name: "Mahbod", status: 'Going to die', avatar: `http://localhost:${PORT}/img/3.jpg`, isOnline: false},
    {id: 2, name: "Proffessor Dibi", status: 'Akbaro kobra, nanay', avatar: `http://localhost:${PORT}/img/1.jpg`, isOnline: true},
    {id: 3, name: "Oskol", status: '', avatar: `http://localhost:${PORT}/img/2.jpg`, isOnline: true},
  ]);
});

app.get('/user/servers-list', (req, res) => {
  res.json([
    {id: 1, name: "No Name Bemola", avatar: null, unreadMessages: 1,},
    {id: 2, name: "DibDmini co.", avatar: `http://localhost:${PORT}/img/1.jpg`, unreadMessages: 0,},
    {id: 3, name: "Oskol's Server", avatar: `http://localhost:${PORT}/img/2.jpg`, unreadMessages: 0,},
    {id: 4, name: "Luxury Cats", avatar: `http://localhost:${PORT}/img/3.jpg`, unreadMessages: 321,},
    {id: 5, name: "Daalli moosheee", avatar: null, unreadMessages: 0,},
    {id: 6, name: "Fazfazoon", avatar: null, unreadMessages: 4,},
  ]);
});

app.get('/user/self', (req, res) => {
  res.json({
    name: 'Mahbod Hastam',
    status: 'LMFAO',
    avatar: `http://localhost:${PORT}/img/4.jpg`,
  });
});

app.listen(PORT, () => {
  console.log(`Running on port 3001`);
});