// build your `/api/projects` router here
const router = require('express').Router();
const Projects = require('./model');

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then((allProjects) => {
      const projectObject = allProjects.map((project) => {
        return {
          ...project,
          project_completed: project.project_completed ? true : false,
        };
      });
      res.json(projectObject);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  Projects.create(req.body)
    .then((project) => {
      console.log(project);
      res.status(200).json(project);
    })
    .catch(next);
});

module.exports = router;
