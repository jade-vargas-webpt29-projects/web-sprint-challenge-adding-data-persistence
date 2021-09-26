// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next) => {
  Resource.getResources()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Resource.create(req.body)
    .then((resource) => {
      console.log(resource);
      res.status(200).json(resource);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something went wrong in the resource Router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
