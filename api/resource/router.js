// build your `/api/resources` router here
const router = require('express').Router();

router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: 'Something went wrong in the resource Router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
