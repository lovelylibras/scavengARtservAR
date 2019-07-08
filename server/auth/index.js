const router = require('express').Router();
const { Teachers, Students } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  const teachers = await Teachers.findAll();
  console.log(teachers);
  res.json(teachers);
});

router.post('/teacher-login', async (req, res, next) => {
  try {
    const user = await Teachers.findOne({
      where: { userName: req.body.userName },
    });
    if (!user) {
      console.log('No such user found:', req.body.userName);
      res.status(401).json({ error: 'Wrong username and/or password' });
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.userName);
      res.status(401).json({ error: 'Wrong username and/or password' });
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
});

router.post('/student-login', async (req, res, next) => {
  try {
    const user = await Students.findOne({
      where: { userName: req.body.userName },
    });
    if (!user) {
      console.log('No such user found:', req.body.userName);
      res.status(401).json({ error: 'Wrong username and/or password' });
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.userName);
      res.status(401).json({ error: 'Wrong username and/or password' });
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
});
