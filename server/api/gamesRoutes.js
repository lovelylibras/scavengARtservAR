const router = require('express').Router();
const { Games, Users, Hunts, Paintings } = require('../db');

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

//find a user's games
router.get('/:userId', async (req, res, next) => {
  try {
    const games = await Games.findAll({
      where: { userId: req.params.userId },
      include: {
        model: Hunts,
        include: [{ model: Paintings }],
      },
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

//create new game
router.post('/:userId/:huntId', async (req, res, next) => {
  try {
    const newGame = await Games.create(req.body);
    newGame.setUser(req.params.userId);
    newGame.setHunt(req.params.huntId);
    res.json(newGame);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
