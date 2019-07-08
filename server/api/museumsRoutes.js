const router = require('express').Router();
const { Museums } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const museums = await Museums.findAll();
    if (museums) {
      res.status(200).send(museums);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
