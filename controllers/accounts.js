const Account = require('../models/account');
// const User = require('../models/user');

module.exports = {
    new: newAccount,
    create,
    index,
    showProfile,
    show
  };

  async function show(req, res) {
    try {
      const accountId = req.params.id;
      const account = await Account.findById(accountId);
      res.render('accounts/show', { account });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async function showProfile(req, res) {
    try {
        let account = await Account.find({ user: req.user._id });
        account = account[0]
        console.log(account)
        if (!account) {
            return res.status(404).send('Account not found');
        }
        res.render('accounts/profile', { account });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

  async function newAccount(req, res) {
    let account = await Account.find({ user: req.user._id });
    if (account.length) {
        res.redirect('/matches')
    }
    res.render('accounts/new', { errorMsg: '' })
      }

  async function create(req, res) {
      req.body.user = req.user._id;
      req.body.userAvatar = req.user.avatar;
    try {
      await Account.create(req.body);
    //   req.body.userName = req.user.name;
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