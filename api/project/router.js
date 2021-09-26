// build your `/api/projects` router here
const router = require('express').Router();

router.use('*', (req, res) => {
  res.json({ api: 'up in the project router' });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something went wrong in the Project Router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
