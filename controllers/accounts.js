const Account = require('../models/account');

module.exports = {
    new: newAccount,
    create,
    index
  };

  function newAccount(req, res) {
    res.render('accounts/new', { errorMsg: '' })
      }

  async function create(req, res) {
    try {
      await Account.create(req.body);
      res.redirect('/accounts');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  function index(req, res) {
    Account.find({})
    .then((accounts) => {
        res.render('accounts/index', { accounts })
    })
    .catch((err) => {
        console.log(err)
    })
 }