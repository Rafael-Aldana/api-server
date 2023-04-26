'use strict';

const express = require('express');

const { food } = require('../models');


const router = express.Router();

router.get('/food', async (req, res, next) => {
  const allFood = await food.read();
  res.status(200).send(allFood);
});

router.post('/food', async (req, res, next) => {
  try {
    console.log(req.body);
    const newFood = await food.create(req.body);
    res.status(200).send(newFood);
  } catch (error) {
    next(error);
  }
});


router.get('/food/:id', async (req, res, next) => {
  const id = req.params.id;
  const foodItem = await food.read(id);
  res.status(200).send(foodItem);
});


router.put('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedFood = await food.update(req.body, id);
    res.status(200).send(updatedFood);
  } catch (error) {
    next(error);
  }
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await food.delete(id);
    res.status(200).send('Deleted');
  } catch (error) {
    next(error);
  }
});


module.exports = router;
