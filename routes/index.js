/* eslint-disable object-shorthand */
const express = require('express');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Form' });
});
router.post('/new', (req, res) => {
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
  console.log(messages);
  res.redirect('/');
});

module.exports = router;
