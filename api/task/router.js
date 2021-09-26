// build your `/api/tasks` router here
const router = require('express').Router();

router.use('*', (req, res) => {
  res.json({ api: 'up in the task router' });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something went wrong in the Task Router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
