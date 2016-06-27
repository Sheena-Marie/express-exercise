/*jshint esversion: 6 */

const greetingMiddleWare = (req, res, next) => {
  req.greeting = 'Howdelie Hi Neighbourino';
  next();
};

const errors = (err, req, res, next) => {
  console.log('ERROR ERROR ERROR!');
  console.log(err);
  res.status(500).send('Something broke!');
};

module.exports = {
  greeting: greetingMiddleWare,
  errors
};
