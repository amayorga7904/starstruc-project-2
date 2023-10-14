const express = require('express');
const router = express.Router();

const accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//GET /accounts
router.get('/', ensureLoggedIn, accountsCtrl.index);

module.exports = router;

