const express = require('express');
const router = express.Router();

const accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', accountsCtrl.index);
//GET /accounts
router.get('/new', accountsCtrl.new);

//POST /accounts/show
router.post('/', accountsCtrl.create)

module.exports = router;

