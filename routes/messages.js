const express = require('express');
const router = express.Router();

const messagesCtrl = require('../controllers/messages');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /accounts/:id
// router.get('/:id', ensureLoggedIn, messagesCtrl.show)
//GET /messages
router.get('/', ensureLoggedIn, messagesCtrl.index)

module.exports = router;
