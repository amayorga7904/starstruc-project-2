const express = require('express');
const router = express.Router();

const accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.get('/', ensureLoggedIn, accountsCtrl.index);

router.get('/new', ensureLoggedIn, accountsCtrl.new);

router.get('/:id/edit', ensureLoggedIn, accountsCtrl.edit)

router.get('/profile', ensureLoggedIn, accountsCtrl.showProfile);

router.get('/public', ensureLoggedIn, accountsCtrl.showAccounts)

router.post('/', ensureLoggedIn, accountsCtrl.create)

router.put('/:id/edit', ensureLoggedIn, accountsCtrl.update)



module.exports = router;

