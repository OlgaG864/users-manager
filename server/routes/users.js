var express = require('express');
var router = express.Router();

const users = require('../controllers/users');

router.get('/', users.getAll);

module.exports = router;
