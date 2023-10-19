const Account = require('../models/account');
const Match = require('../models/match');

module.exports = {
    new: newAccount,
    create,
    index,
    showProfile,
    showAccounts,
    edit,
    update
  };

  async function update(req, res) {
    const userId = req.user._id;
    const newBio = req.body.bio;

    try {
        let account = await Account.findOneAndUpdate({ user: userId }, { bio: newBio }, { new: true });
        if (!account) {
            return res.status(404).send('Account not found');
        }
        res.redirect('/accounts/profile');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


async function edit(req, res) {
    const userId = req.user._id;
    try {
        let account = await Account.find(userId);
        if (!account) {
            return res.status(404).send('Account not found');
        }
        res.render('accounts/edit', { account });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


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
        const allMatches = await Match.find({});
        
        // Convert user IDs in match objects to string representations
        const matchesWithUsersAsString = allMatches.map(match => {
            const users = match.users.map(userId => (userId ? userId.toString() : null));
            return { ...match._doc, users };
        }).filter(match => match.users && match.users.includes(req.user._id.toString()));
        console.log(matchesWithUsersAsString)
        console.log(req.user._id)

        if (matchesWithUsersAsString.length === 0) {
            return res.status(404).send('No matches found for the user');
        }

        const account = await Account.findOne({ user: req.user._id });
        if (!account) {
            return res.status(404).send('Account not found');
        }
        
        res.render('accounts/profile', { account, matches: matchesWithUsersAsString });
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
    res.render('accounts/new')
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