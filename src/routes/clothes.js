'use strict';

const express = require('express');

const { clothesCollection } = require('../models');


const router = express.Router();

router.get('/clothes', async (req, res, next) => {
  const clothes = await clothesCollection.read();
  res.status(200).send(clothes);
});

router.post('/clothes', async (req, res, next) => {
  try {
    console.log(req.body);
    const newClothes = await clothesCollection.create(req.body);
    res.status(200).send(newClothes);
  } catch (error) {
    next(error);
  }
});


router.get('/clothes/:id', async (req, res, next) => {
  const id = req.params.id;
  const clothes = await clothesCollection.read(id);
  res.status(200).send(clothes);
});


router.put('/clothes/:id', async (req, res, next) => {
  try {

    const updatedClothes = await clothesCollection.update(req.body, {where: {id: req.params.id}});
    res.status(200).send(updatedClothes);
  } catch (errot) {
    next(error);
  }
});

router.delete('/clothes/:id', async (req, res, next) => {
  try {

    await clothesCollection.delete({where: {id: req.params.id}});
    res.status(200).send('Deleted');
  } catch (error) {
    next(error);
  }
});


module.exports = router;
