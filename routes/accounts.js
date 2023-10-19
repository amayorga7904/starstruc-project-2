const express = require('express');
const router = express.Router();

const accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');
//GET /accounts
router.get('/', ensureLoggedIn, accountsCtrl.index);
//GET /accounts/new
router.get('/new', ensureLoggedIn, accountsCtrl.new);
router.get('/profile', ensureLoggedIn, accountsCtrl.showProfile);
router.get('/public', ensureLoggedIn, accountsCtrl.showAccounts)
//accounts/:id
router.get('/:id/edit', ensureLoggedIn, accountsCtrl.edit)
//POST /accounts
router.post('/', ensureLoggedIn, accountsCtrl.create)

router.put('/', ensureLoggedIn, accountsCtrl.update)

module.exports = router;

