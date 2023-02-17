'use strict';

const express = require('express');

const { foodCollection } = require('../models');


const router = express.Router();

router.get('/food', async (req, res, next) => {
  const food = await foodCollection.read();
  res.status(200).send(food);
});

router.post('/food', async (req, res, next) => {
  try {
    console.log(req.body);
    const newFood = await foodCollection.create(req.body);
    res.status(200).send(newFood);
  } catch (error) {
    next(error);
  }
});


router.get('/food/:id', async (req, res, next) => {
  const id = req.params.id;
  const food = await foodCollection.read(id);
  res.status(200).send(food);
});


router.put('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedFood = await foodCollection.update(req.body, id);
    res.status(200).send(updatedFood);
  } catch (error) {
    next(error);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await foodCollection.delete(id);
    res.status(200).send('Deleted');
  } catch (error) {
    next(error);
  }
});


module.exports = router;
