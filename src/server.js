'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/500');

const PORT = process.env.PORT || 3002;
const notFound = require('./error-handlers/404');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');


app.use(express.json());
app.use(foodRouter);
app.use(clothesRouter);
app.use(logger);

app.get('/', (req, res) => {

  const message = `Welcome to my server`;

  res.status(200).send(message);
});

app.get('/person', validator, (req, res) => {

  // if (!req.query.personName){
  //   next();
  //   return;
  // }
  const name = {name: req.query.name} ;

  res.status(200).json(name);
});



function startServer() {
  app.listen (PORT, () => console.log(`Listening on port: ${PORT}`));
}

app.use('*', notFound);
app.use(errorHandler);

module.exports = { startServer, app }


