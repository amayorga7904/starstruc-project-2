const express = require('express');
const router = express.Router();

const matchesCtrl = require('../controllers/matches');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /matches/:id
// router.get('/:id', ensureLoggedIn, matchesCtrl.show)
//GET /matches
router.get('/', ensureLoggedIn, matchesCtrl.index)

module.exports = router;