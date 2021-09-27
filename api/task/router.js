// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');

router.get('/', (req, res, next) => {
  Task.getTasks()
    .then((allTasks) => {
      const taskObject = allTasks.map((task) => {
        return {
          ...task,
          task_completed: task.task_completed ? true : false,
        };
      });
      res.status(200).json(taskObject);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Task.create(req.body)
    .then((allTasks) => {
      const taskObject = allTasks.map((task) => {
        return {
          ...task,
          task_completed: task.task_completed ? true : false,
        };
      });
      res.status(200).json(taskObject);
    })
    .catch(next);
});

module.exports = router;
