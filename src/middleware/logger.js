'use strict';

const logger = (req, res, next) => {
  let reqMethod = req.method;
    let path = req.path;

  console.log(reqMethod, path);

  next();
  };

  module.exports = logger;
