// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Project.create(req.body)
    .then((project) => {
      console.log(project);
      res.status(200).json(project);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something went wrong in the Project Router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
