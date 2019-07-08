const router = require('express').Router();
const { Games, Classrooms } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allGames = await Games.findAll();
    if (allGames) {
      res.status(200).send(allGames);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.get('/:classroomId', async (req, res, next) => {
  try {
    const games = await Games.findAll({
      where: { classroomId: req.params.classroomId },
    });
    if (games) {
      res.json(games);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

router.post('/:classroomId/:huntId', async (req, res, next) => {
  try {
    const classroom = await Classrooms.findOne({
      where: { id: req.params.classroomId },
    });
    if (classroom) {
      classroom.addHunt(req.params.huntId);
      const newGame = await Games.findOne({
        where: {
          classroomId: req.params.classroomId,
          huntId: req.params.huntId,
        },
      });
      res.json(newGame);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
