// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

router.get('/', (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Task.create(req.body)
    .then((task) => {
      console.log(task);
      res.status(200).json(task);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something went wrong in the Task Router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
