const router = require('express').Router();
const controller = require('../controllers/auth');

router.post('/authenticate', controller.authenticateUser);

module.exports = router;
