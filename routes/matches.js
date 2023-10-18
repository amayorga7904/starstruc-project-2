const express = require('express');
const router = express.Router();

const matchesCtrl = require('../controllers/matches');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /matches/new
router.post('/new', ensureLoggedIn, matchesCtrl.createNewMatch)
console.log('Received a request to create a match');
router.get('/', ensureLoggedIn, matchesCtrl.index);
//GET /matches

module.exports = router;