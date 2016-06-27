/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const middleware = require('./middleware');

router.get('/', (req, res) => {
  console.log(req);
  res.json(req.headers);
});

router.get('/questions', (req, res) =>{
  console.log(req.query);
  res.send(`What ${req.params.query}`);
});

router.get('/:name', middleware.greeting, (req, res) => {
  // elephant();
  console.log(req.params);
  console.log(req.greeting);
  res.send(`${req.greeting} ${req.params.name}`);
});

router.post('/mail', (req, res) => {
  console.log(req.body);
  res.send('You posted yo mail dawg');
});


module.exports = router;
