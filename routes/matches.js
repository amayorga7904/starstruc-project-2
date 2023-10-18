const express = require('express');
const router = express.Router();

const matchesCtrl = require('../controllers/matches');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /matches/new
router.post('/new', ensureLoggedIn, matchesCtrl.createNewMatch)

// router.post('/:senderId/:recipientId', ensureLoggedIn, matchesCtrl.create);

console.log('Received a request to create a match');

router.get('/', ensureLoggedIn, matchesCtrl.index);
//GET /matches
router.get('/:id', ensureLoggedIn, matchesCtrl.showConversation);

module.exports = router;