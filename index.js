'use strict';

require('dotenv').config();

const { startServer } = require('./src/server');
const { sequelizeDatabase } = require('./src/models');

sequelizeDatabase.sync().then(() => {
  console.log('Successful Connection');
  startServer ();
}).catch(error => console.error(error));
