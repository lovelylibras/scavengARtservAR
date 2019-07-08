const router = require('express').Router();
const { Teachers } = require('../db');

router.post('/', async (req, res, next) => {
  try {
    const newTeacher = await Teachers.create(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
