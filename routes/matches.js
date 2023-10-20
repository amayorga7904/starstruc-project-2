const express = require('express');
const router = express.Router();

const matchesCtrl = require('../controllers/matches');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.post('/new', ensureLoggedIn, matchesCtrl.createNewMatch)

router.get('/', ensureLoggedIn, matchesCtrl.index);

router.get('/:id', ensureLoggedIn, matchesCtrl.showConversation);

router.delete('/:id', ensureLoggedIn, matchesCtrl.delete);



module.exports = router;