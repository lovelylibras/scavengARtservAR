const router = require('express').Router();
const { Classrooms } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allClassrooms = await Classrooms.findAll();
    if (allClassrooms) {
      res.status(200).send(allClassrooms);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.get('/:teacherId', async (req, res, next) => {
  try {
    const classroom = await Classrooms.findAll({
      where: { teacherId: req.params.teacherId },
    });
    if (classroom) {
      res.json(classroom);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.post('/:teacherId', async (req, res, next) => {
  try {
    const newClassroom = await Classrooms.create(req.body);
    console.log('stuff on newClassroom', newClassroom.__proto__);
    newClassroom.setTeacher(req.params.teacherId);
    res.status(201).send(newClassroom);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
