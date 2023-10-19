const express = require('express');
const router = express.Router();

const messagesCtrl = require('../controllers/messages');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.post('/:id', ensureLoggedIn, messagesCtrl.create);



module.exports = router;
