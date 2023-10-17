const express = require('express');
const router = express.Router();

const accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');
//GET /accounts
router.get('/', ensureLoggedIn, accountsCtrl.index);
//GET /accounts/new
router.get('/new', ensureLoggedIn, accountsCtrl.new);
router.get('/profile', ensureLoggedIn, accountsCtrl.showProfile);

//accounts/:id
router.get('/:id', accountsCtrl.show)
//POST /accounts
router.post('/', ensureLoggedIn, accountsCtrl.create)

module.exports = router;

