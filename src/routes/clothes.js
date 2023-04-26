'use strict';

const express = require('express');

const { clothes } = require('../models');


const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const allClothes = await clothes.read();
  res.status(200).send(allClothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    console.log(req.body);
    const newClothes = await clothes.create(req.body);
    res.status(200).send(newClothes);
  } catch (error) {
    next(error);
  }
});


router.get('/clothes/:id', async (req, res, next) => {
  const id = req.params.id;
  const clothesItem = await clothes.read(id);
  res.status(200).send(clothesItem);
});


router.put('/clothes/:id', async (req, res, next) => {
  try {
    console.log('updated clothes', req.body, req.params.id);
    const updatedClothes = await clothes.update(req.body, req.params.id);
    res.status(200).send(updatedClothes);
  } catch (error) {
    next(error);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {

    await clothes.delete(req.params.id);
    res.status(200).send('Deleted');
  } catch (error) {
    next(error);
  }
});


module.exports = router;
