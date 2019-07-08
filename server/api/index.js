'use strict';

const router = require('express').Router();

router.use('/hunt', require('./huntRoutes'));
router.use('/painting', require('./paintingRoutes'));
router.use('/games', require('./gamesRoutes'));
router.use('/classrooms', require('./classroomRoutes'));
router.use('/students', require('./studentsRoutes'));
router.use('/teachers', require('./teachersRoutes'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
