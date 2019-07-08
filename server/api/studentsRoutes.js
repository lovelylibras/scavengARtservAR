const router = require('express').Router();
const { Students } = require('../db');

router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Students.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
