const express = require('express');
const router = express.Router();

const accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');
//GET /accounts
router.get('/', ensureLoggedIn, accountsCtrl.index);
//GET /accounts/new
router.get('/new', ensureLoggedIn, accountsCtrl.new);
router.get('/profile', ensureLoggedIn, accountsCtrl.showProfile);

//GET /todos/:id/edit
// router.get('/:id/edit', accountsCtrl.edit)
//POST /accounts
router.post('/', ensureLoggedIn, accountsCtrl.create)

module.exports = router;

