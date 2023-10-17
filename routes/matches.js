const express = require('express');
const router = express.Router();

const matchesCtrl = require('../controllers/matches');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// POST /matches
router.post('/', ensureLoggedIn, matchesCtrl.create)

module.exports = router;