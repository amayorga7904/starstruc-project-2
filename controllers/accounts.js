const Account = require('../models/account');
const Match = require('../models/match');

module.exports = {
    new: newAccount,
    create,
    index,
    showProfile,
    showAccounts
    // show
  };

//   async function show(req, res) {
//     try {
//       const accountId = req.params.id;
//       const account = await Account.findById(accountId);
//       res.render('accounts/show', { account });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     }
//   }
async function showAccounts(req, res) {
    console.log('inside the index')
    try {
        const senderId = req.params.senderId;
        const recipientId = req.params.recipientId;
        const match = await Match.findOne();
      const userId = req.user._id;
      let accounts = await Account.find({ user: { $ne: userId } });
      if (!accounts) {
        return res.status(404).send('No accounts found');
      }
  
      res.render('accounts/public', { accounts, match });
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
        res.redirect('/accounts/public')
    }
    // res.render('accounts/new', { errorMsg: '' })
      }



  async function create(req, res) {
      req.body.user = req.user._id;
      req.body.userAvatar = req.user.avatar;
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