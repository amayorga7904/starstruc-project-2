const express = require('express');
const router = express.Router();

const messagesCtrl = require('../controllers/messages');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /accounts/:id
// router.get('/:id', ensureLoggedIn, messagesCtrl.show)
//matches/:id/messages
router.post('/matches/:id/messagess', ensureLoggedIn, messagesCtrl.create)

module.exports = router;
