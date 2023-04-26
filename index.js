'use strict';

require('dotenv').config();

const { startServer } = require('./src/server');
const { sequelize } = require('./src/models');

sequelize.sync().then(() => {
  console.log('Successful Connection');
  startServer ();
}).catch(error => console.error(error));
